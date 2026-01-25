"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const marqueeText = "LET'S BUILD THE VERSION THE WORLD HASN'T SEEN YET • ";
const marqueeRepeats = Array.from({ length: 10 });
const MotionTextPath = motion("textPath");

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#FF4D00] bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="pointer-events-none flex h-[250px] w-full items-center justify-center overflow-hidden md:h-[400px]">
          <svg
            className="h-full min-w-[1200px] w-full"
            viewBox="0 0 2880 200"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <path
                id="wavePath"
                d="M0,100 C360,0 1080,200 1440,100 C1800,0 2520,200 2880,100"
                fill="none"
              />
            </defs>
            <text className="fill-white text-[40px] font-black uppercase tracking-[0.3em] md:text-[60px]">
              <MotionTextPath
                href="#wavePath"
                startOffset="0%"
                animate={{ startOffset: ["0%", "-100%"] }}
                transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              >
                {marqueeRepeats.map((_, index) => (
                  <tspan key={index}>{marqueeText}</tspan>
                ))}
              </MotionTextPath>
            </text>
          </svg>
        </div>

        <div className="-mt-8 px-6 pb-24 text-center sm:px-10 lg:px-16 md:-mt-32">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black">
            If you are building something meaningful in Web3 - we would love to help you give it the voice it deserves
            </p>
            <div className="flex flex-col">
              <h2 className="max-w-[90vw] break-words text-5xl font-extrabold uppercase leading-relaxed text-white md:text-8xl md:leading-none lg:text-9xl">
                GET IN TOUCH
              </h2>
              <h2 className="mt-0 max-w-[90vw] break-words text-5xl font-extrabold uppercase leading-relaxed text-transparent [-webkit-text-stroke:1px_#ffffff] md:-mt-10 md:text-8xl md:leading-none md:[-webkit-text-stroke:2px_#ffffff] lg:-mt-12 lg:text-9xl xl:-mt-14">
                WITH MINERVA
              </h2>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                className="rounded-full bg-white px-8 py-4 text-xl font-semibold uppercase tracking-[0.2em] text-[#FF4D00] shadow-[6px_6px_0px_0px_rgba(0,0,0,0)] transition duration-200 hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                onClick={() => setIsModalOpen(true)}
              >
                START A PROJECT →
              </button>
              <button className="rounded-full border border-white px-8 py-4 text-xl font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10">
                MINERVA.WEB3@GMAIL.COM
              </button>
            </div>

            <div className="mt-20 max-w-4xl mx-auto text-center px-4 fade-in">
              <span className="block text-[#FF4D00] font-bold text-sm tracking-[0.2em] mb-4 uppercase">
                About Minerva
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
                Your Creative Voice in the Blockchain World
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Minerva is a pioneering Web3 creative agency based in Da Nang, Vietnam. We
                combine creativity, technology, and nearly a decade of cross-industry brand
                experience to help Web3 projects stand out, scale up, and grow sustainably.
                From Vietnam’s emerging innovation hub, we support both global and local
                teams with creative solutions that connect communities and strengthen
                brands - online, offline, and everywhere in between.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
