"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Target } from "lucide-react";

const marqueeText = "SuperTeamVN • SqrDAO • Bybit • Aptos • Decentralab • KyberSwap • Ourbit •";
const marqueeRepeats = Array.from({ length: 10 });

const items = [
  {
    title: "CREATIVE FOCUS FOR WEB3 BRANDS",
    icon: Target,
    content: [
      "The Problem: The Web3 space is saturated with projects sharing similar products, features, and narratives.",
      "The Minerva Solution: Creativity is the key differentiator.",
      "The Action: Translating complex technical ideas into memorable stories, visuals, and experiences that people actually care about.",
    ],
  },
  {
    title: "CROSS-INDUSTRY EXPERTISE (WEB2 HERITAGE)",
    icon: Award,
    content: [
      "The Asset: 10+ years of Web2 experience.",
      "The Track Record: Built campaigns for Vietnam's most recognized brands, including: Tech/E-com (Grab, Lazada), Finance (Manulife), FMCG (Vinamilk, Kao), Appliances (Daikin, Panasonic).",
      "The Value: Deep understanding of user behavior, insights, and brand longevity.",
    ],
  },
  {
    title: "DA NANG ADVANTAGE",
    icon: MapPin,
    content: [
      "The Context: Rising Web3 activity in the Central region of Vietnam.",
      "The Position: A \"new wave\" in Vietnam's creative & blockchain ecosystem.",
      "The Benefit: Local presence, Fast execution, Strong community access.",
    ],
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-white text-black">
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
              WHY WORK WITH US
            </span>
            <h2 className="text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
              WE DON&apos;T JUST FILL THE BRIEF.
              <br />
              <span className="text-orange-500">WE&apos;RE FUEL THE CULTURE.</span>
            </h2>
          </div>

          <div className="flex flex-col border-t border-gray-200">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex w-full gap-6 border-b border-gray-200 bg-white p-8 transition-colors duration-300 ease-in-out hover:bg-gray-50"
                >
                  <div className="pt-1">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-2xl font-bold uppercase text-black">
                      {item.title}
                    </h3>
                    <div className="max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                      <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-700 font-mono">
                        {item.content.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            BRANDS TRUST US TO BE BOLD.
            <br />
            BECAUSE WE BUILD ON STRATEGY, NOT LUCK.
          </p>
        </div>
      </div>
    </section>
  );
}
