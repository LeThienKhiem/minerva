"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LogOut,
  Pencil,
  Plus,
  Save,
  Trash2,
  UploadCloud,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import type { Project } from "../../lib/types";

type ProjectFormState = Omit<Project, "id"> & {
  id?: number;
};

const emptyProject: ProjectFormState = {
  title: "",
  category: "",
  description: "",
  achievements: [""],
  main_image: "",
  gallery: [],
};

export default function AdminPage() {
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<ProjectFormState>(emptyProject);
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);

  const isEditing = useMemo(() => Boolean(formState.id), [formState.id]);

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setSessionEmail(data.session?.user.email ?? null);
      setIsLoading(false);
    };

    init();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSessionEmail(session?.user.email ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (sessionEmail) {
      fetchProjects();
    }
  }, [sessionEmail]);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Failed to fetch projects:", error.message);
      return;
    }

    setProjects(data ?? []);
  };

  const resetModal = () => {
    setFormState(emptyProject);
    setMainImageFile(null);
    setGalleryFiles([]);
    setIsModalOpen(false);
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setProjects([]);
  };

  const uploadFile = async (file: File) => {
    const extension = file.name.split(".").pop();
    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${extension}`;
    const path = `projects/${filename}`;

    const { data, error } = await supabase.storage
      .from("project-images")
      .upload(path, file, { upsert: true });

    if (error || !data) {
      throw new Error(error?.message ?? "Failed to upload file.");
    }

    const { data: publicData } = supabase.storage
      .from("project-images")
      .getPublicUrl(data.path);

    return publicData.publicUrl;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let mainImageUrl = formState.main_image;
    if (mainImageFile) {
      mainImageUrl = await uploadFile(mainImageFile);
    }

    let galleryUrls = formState.gallery;
    if (galleryFiles.length > 0) {
      const uploads = await Promise.all(galleryFiles.map(uploadFile));
      galleryUrls = uploads;
    }

    const payload = {
      title: formState.title,
      category: formState.category,
      description: formState.description,
      achievements: formState.achievements.filter(Boolean),
      main_image: mainImageUrl,
      gallery: galleryUrls,
    };

    if (isEditing && formState.id) {
      const { error } = await supabase
        .from("projects")
        .update(payload)
        .eq("id", formState.id);

      if (error) {
        alert(error.message);
        return;
      }
    } else {
      const { error } = await supabase.from("projects").insert(payload);
      if (error) {
        alert(error.message);
        return;
      }
    }

    await fetchProjects();
    resetModal();
  };

  const handleDelete = async (projectId: number) => {
    const confirmed = confirm("Delete this project?");
    if (!confirmed) return;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", projectId);

    if (error) {
      alert(error.message);
      return;
    }

    await fetchProjects();
  };

  const openCreateModal = () => {
    setFormState(emptyProject);
    setMainImageFile(null);
    setGalleryFiles([]);
    setIsModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setFormState(project);
    setMainImageFile(null);
    setGalleryFiles([]);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <div className="min-h-screen bg-black text-white" />;
  }

  if (!sessionEmail) {
    return (
      <main className="min-h-screen bg-black px-6 py-24 text-white">
        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-2xl font-bold uppercase">Admin Login</h1>
          <form className="mt-6 space-y-4" onSubmit={handleSignIn}>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase text-white/70">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white"
                placeholder="you@minerva.web3"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase text-white/70">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-orange-500 px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold uppercase">Projects CMS</h1>
            <p className="text-sm text-white/60">Signed in as {sessionEmail}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={openCreateModal}
              className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black"
            >
              <Plus className="h-4 w-4" />
              Add Project
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-white/60">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-4 py-3 text-white/60">{project.id}</td>
                  <td className="px-4 py-3 font-semibold">{project.title}</td>
                  <td className="px-4 py-3 text-white/60">
                    {project.category}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openEditModal(project)}
                        className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
                      >
                        <Pencil className="h-4 w-4" />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(project.id)}
                        className="flex items-center gap-2 rounded-full border border-red-500/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-white/60"
                  >
                    No projects yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-black p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold uppercase">
                  {isEditing ? "Edit Project" : "Add Project"}
                </h2>
                <p className="text-sm text-white/60">
                  Update project details, images, and achievements.
                </p>
              </div>
              <button
                type="button"
                onClick={resetModal}
                className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase text-white/70"
              >
                Close
              </button>
            </div>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-white/60">
                    Title
                  </label>
                  <input
                    value={formState.title}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        title: event.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-white/60">
                    Category
                  </label>
                  <input
                    value={formState.category}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        category: event.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-white/60">
                  Description
                </label>
                <textarea
                  value={formState.description}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      description: event.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase text-white/60">
                  Achievements
                </label>
                <div className="space-y-3">
                  {formState.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        value={achievement}
                        onChange={(event) => {
                          const next = [...formState.achievements];
                          next[index] = event.target.value;
                          setFormState((prev) => ({
                            ...prev,
                            achievements: next,
                          }));
                        }}
                        className="flex-1 rounded-lg border border-white/10 bg-black px-4 py-2 text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const next = formState.achievements.filter(
                            (_, idx) => idx !== index
                          );
                          setFormState((prev) => ({
                            ...prev,
                            achievements: next.length ? next : [""],
                          }));
                        }}
                        className="rounded-full border border-white/10 p-2 text-white/70"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFormState((prev) => ({
                      ...prev,
                      achievements: [...prev.achievements, ""],
                    }))
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs uppercase text-white/70"
                >
                  <Plus className="h-4 w-4" />
                  Add Achievement
                </button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-white/60">
                    Main Image URL
                  </label>
                  <input
                    value={formState.main_image}
                    onChange={(event) =>
                      setFormState((prev) => ({
                        ...prev,
                        main_image: event.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-white/10 bg-black px-4 py-2 text-white"
                  />
                  {formState.main_image && (
                    <img
                      src={formState.main_image}
                      alt="Main preview"
                      className="h-40 w-full rounded-2xl object-cover"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-white/60">
                    Upload New Main Image
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase text-white/70">
                    <UploadCloud className="h-4 w-4" />
                    Select File
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) =>
                        setMainImageFile(event.target.files?.[0] ?? null)
                      }
                    />
                  </label>
                  {mainImageFile && (
                    <p className="text-xs text-white/60">
                      Selected: {mainImageFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-white/60">
                    Gallery URLs
                  </label>
                  <div className="space-y-3">
                    {formState.gallery.map((url, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          value={url}
                          onChange={(event) => {
                            const next = [...formState.gallery];
                            next[index] = event.target.value;
                            setFormState((prev) => ({
                              ...prev,
                              gallery: next,
                            }));
                          }}
                          className="flex-1 rounded-lg border border-white/10 bg-black px-4 py-2 text-white"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const next = formState.gallery.filter(
                              (_, idx) => idx !== index
                            );
                            setFormState((prev) => ({
                              ...prev,
                              gallery: next,
                            }));
                          }}
                          className="rounded-full border border-white/10 p-2 text-white/70"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setFormState((prev) => ({
                        ...prev,
                        gallery: [...prev.gallery, ""],
                      }))
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs uppercase text-white/70"
                  >
                    <Plus className="h-4 w-4" />
                    Add Gallery URL
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-white/60">
                    Upload New Gallery Images
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase text-white/70">
                    <UploadCloud className="h-4 w-4" />
                    Select Files
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(event) =>
                        setGalleryFiles(
                          event.target.files
                            ? Array.from(event.target.files)
                            : []
                        )
                      }
                    />
                  </label>
                  {galleryFiles.length > 0 && (
                    <p className="text-xs text-white/60">
                      Selected: {galleryFiles.length} files
                    </p>
                  )}
                </div>
              </div>

              {formState.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {formState.gallery.map((url, index) => (
                    <div
                      key={`${url}-${index}`}
                      className="overflow-hidden rounded-xl border border-white/10"
                    >
                      <img
                        src={url}
                        alt={`Gallery preview ${index + 1}`}
                        className="h-24 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetModal}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase text-white/70"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black"
                >
                  <Save className="h-4 w-4" />
                  {isEditing ? "Save Changes" : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
