"use client";
import { motion } from "framer-motion";

const marqueeText = "CREATIVE WEB3 AGENCY • CREATIVE WEB3 AGENCY •";
const marqueeRepeats = Array.from({ length: 10 });

const services = [
  {
    title: "Creative Content & Media Strategy",
    subtext: "Crafting visuals, stories, and digital presence that stand out.",
    bullets: [
      "Brand identity & visual systems",
      "Websites & digital experiences",
      "Content & storytelling",
      "Motion design & video",
    ],
  },
  {
    title: "Event & Community Experience",
    subtext: "Bringing Web3 communities to life through meaningful moments.",
    bullets: [
      "Networking events & meetups",
      "Conference activations",
      "Pop-up experiences",
      "Community building initiatives",
    ],
  },
  {
    title: "Merchandise & Lifestyle",
    subtext: "Creating physical and cultural touchpoints for Web3 builders.",
    bullets: [
      "Merchandise & gifting",
      "Product collaborations",
      "Limited edition drops",
      "Brand lifestyle goods",
    ],
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden bg-black py-4">
        <motion.div
          className="flex w-max items-center gap-6 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-white"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 16, repeat: Infinity }}
        >
          {marqueeRepeats.map((_, index) => (
            <span key={index} aria-hidden={index !== 0}>
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="bg-white px-6 py-16 text-black sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-[#FF4D00] font-bold text-sm tracking-[0.2em] mb-4 uppercase">
              What we do
            </span>
            <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Services that{" "}
              <span className="text-orange-500">actually matter</span>
            </h2>
            <p className="max-w-[600px] text-sm leading-7 text-gray-500 font-mono sm:text-base">
              We build full-stack brand experiences for ambitious teams, blending
              design, storytelling, and execution across every touchpoint.
            </p>
          </div>

          <div className="flex flex-col">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex w-full cursor-none flex-col gap-4 border-b border-gray-200 bg-white p-8 transition-colors duration-300 ease-in-out hover:bg-gray-100 md:flex-row md:items-start md:justify-between"
              >
                <div className="w-full md:max-w-[50%]">
                  <h3 className="break-words text-4xl font-bold uppercase text-black md:text-6xl">
                    {service.title}
                  </h3>
                </div>

                <div className="mt-4 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-0 md:max-w-[40%]">
                  <p className="text-sm leading-6 text-gray-600 font-mono">
                    {service.subtext}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2 text-sm font-mono text-gray-800">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
