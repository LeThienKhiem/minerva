export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getProjectById } from "../../../lib/actions";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">
          Project Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          We couldn&apos;t find project ID: &quot;{id}&quot;
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Link
        href="/#work"
        className="fixed left-6 top-8 z-50 rounded-full border border-white/10 bg-black/50 p-3 text-white/80 backdrop-blur-md transition hover:bg-white hover:text-black sm:left-8"
      >
        <ArrowLeft className="h-5 w-5" />
      </Link>

      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block">
          {project.category}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          {project.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-xl text-gray-400 leading-relaxed">
            {project.description}
          </p>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">
              Key Achievements
            </h3>
            <ul className="space-y-4">
              {project.achievements.map((achievement) => (
                <li key={achievement} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px] columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {project.gallery.map((image, index) => (
            <div
              key={`${project.id}-${index}`}
              className="break-inside-avoid mb-4 relative group overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={`${project.title} gallery ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
