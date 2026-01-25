"use client";

import { Quote } from "lucide-react";

const stories = [
  {
    quote: "Minerva is the partner you want when you’re building and communicating at the same time. They understand founders - the chaos, the constant context switching, the need to tell a compelling story while executing.  They bring structure without slowing you down, elevate your ideas without changing your voice, and consistently help you show up as the founder your project deserves.",
    name: "KYLE DINH  - Founder @Tokera",
  },
  {
    quote: "The plan given is very thoughtful and it is not about the content calendar but understanding of the direction of content that best fits the product and founder during this process immensely helps founders to get the social game right in the longer run.",
    name: "BK - Founder @Airdrop Arcade",
  },
  {
    quote: "I really appreciated the team's professional attitude and their strategic advice on content and topics, which perfectly aligned with our project's growth.",
    name: "Quang Nguyen - Founder @AgroX Network",
  },
];

export default function ClientStories() {
  return (
    <section className="w-full bg-black px-6 py-20 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            CLIENT STORIES
          </span>
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            PROOF, NOT{" "}
            <span className="text-orange-500">PROMISES</span>
          </h2>
        </div>

        <div className="grid w-full gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.name}
              className="flex h-full flex-col gap-6 rounded-3xl bg-neutral-900 p-8"
            >
              <Quote className="h-10 w-10 text-orange-500" />
              <p className="text-lg leading-8 text-white/80">
                {story.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-emerald-500/80" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {story.name}
                </p>
              </div>

            </article>
          ))}
        </div>

        <p className="text-center text-xl font-bold uppercase tracking-[0.25em] text-white sm:text-2xl">
          POWERING THE BRANDS OF TOMORROW.
          <br />
          <span className="text-orange-500">BUILD YOURS TODAY.</span>
        </p>
      </div>
    </section>
  );
}
