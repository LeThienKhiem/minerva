export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../lib/actions";

export default async function WorkIndexPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-neutral-950 px-6 pb-24 pt-28 text-white sm:px-10 lg:px-16">
      <Link
        href="/"
        className="fixed left-6 top-6 z-50 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md transition hover:text-white"
      >
        Back to Home
      </Link>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header>
          <h1 className="text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Our Works
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group fade-in block opacity-0"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={project.main_image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-mono">
                    {project.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold uppercase transition-colors group-hover:text-orange-500">
                    {project.title}
                  </h2>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-600">
                  Archive
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
