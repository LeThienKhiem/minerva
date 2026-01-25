"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import type { Project } from "../lib/types";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const marqueeText = "THE WORK • CASE STUDIES •";
const marqueeRepeats = Array.from({ length: 10 });

type TheWorkProps = {
  projects: Project[];
};

export default function TheWork({ projects }: TheWorkProps) {
  return (
    <section className="w-full bg-black text-white">
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

      <div className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              THE WORK
            </span>
            <h2 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              CASE STUDIES THAT
              <br />
              <span className="text-orange-500">MOVED CULTURE WEB3</span>
            </h2>
          </div>

          <style>{`
            .the-work-swiper .swiper-pagination {
              bottom: 0px !important;
            }
            .the-work-swiper .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
              background: #ffffff;
              opacity: 0.3;
            }
            .the-work-swiper .swiper-pagination-bullet-active {
              background: #ff4d00;
              opacity: 1;
              transform: scale(1.2);
            }
          `}</style>
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            slidesPerView="auto"
            centeredSlides
            loop
            grabCursor
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
              scale: 0.85,
            }}
            pagination={{ clickable: true }}
            className="the-work-swiper !overflow-visible w-full py-10 !pb-16 [&_.swiper-slide]:opacity-40 [&_.swiper-slide]:transition-opacity [&_.swiper-slide]:duration-500 [&_.swiper-slide.swiper-slide-active]:opacity-100"
          >
            {projects.map((study) => {
              const imageSrc =
                study.main_image?.trim() ||
                (study.title === "PULSE NETWORK"
                  ? "https://images.unsplash.com/photo-1707216171962-9f1514c0bda6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  : "");

              return (
              <SwiperSlide
                key={study.id}
                className="cursor-pointer !h-[60vh] !w-[85vw] md:!h-[500px] md:!w-[650px]"
              >
                <Link href={`/work/${study.id}`} className="block h-full w-full">
                  <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={imageSrc}
                      alt={`${study.title} visual`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="relative z-20 flex h-full flex-col justify-end p-8 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                        {study.category}
                      </p>
                      <h3 className="mt-4 text-4xl font-bold uppercase sm:text-5xl">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="mt-16 flex justify-center">
            <Link
              href="/work"
              className="group relative inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-white transition-colors duration-300 hover:text-[#FF4D00]"
            >
              EXPLORE ALL PROJECTS
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
