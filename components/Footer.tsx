"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const marqueeText = "BOLD FEARLESS CULTURE-DRIVEN AUTHENTIC •";
const marqueeRepeats = Array.from({ length: 10 });
const navLinks = [
  { label: "SERVICES", href: "/#services" },
  { label: "WORK", href: "/#work" },
  { label: "WHY MINERVA", href: "/#why-us" },
  { label: "CLIENTS", href: "/#clients" },
  { label: "CONTACT", href: "/#contact" },
];
const bottomLinks = ["PRIVACY", "TERMS", "CREDITS"];

export default function Footer() {
  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden bg-black py-4">
        <motion.div
          className="flex w-max items-center gap-6 whitespace-nowrap text-sm font-bold uppercase tracking-[0.3em] text-white"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
        >
          {marqueeRepeats.map((_, index) => (
            <span key={index} aria-hidden={index !== 0}>
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="bg-white px-6 py-16 text-black sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="https://asbdbqzxgncwphuiuuiw.supabase.co/storage/v1/object/public/project-images/logo-footer.png"
                alt="Minerva logo"
                width={220}
                height={70}
                className="h-10 w-auto"
              />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Creative Web3 Agency
            </span>
          </div>

          <div className="flex w-full flex-col gap-10 md:max-w-[520px]">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
 
              </span>
              <div className="grid grid-cols-2 gap-3 text-sm font-bold uppercase text-black sm:grid-cols-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[#FF4D00]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                Connect
              </span>
              <div className="flex flex-col gap-3 text-sm font-semibold uppercase text-black">
                <a
                  href="mailto:minerva.web3@gmail.com"
                  className="lowercase text-sm font-semibold text-black transition-colors duration-300 hover:text-[#FF4D00]"
                >
                  minerva.web3@gmail.com
                </a>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Based in da nang, vietnam
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { href: "https://www.instagram.com/minerva.web3/", Icon: Instagram },
                  { href: "https://x.com/MinervaWeb3", Icon: Twitter },
                  { href: "https://www.linkedin.com/company/minerva-web3/", Icon: Linkedin },
                  { href: "mailto:minerva.web3@gmail.com", Icon: Mail },
                ].map(({ href, Icon }, index) => (
                  <a
                    key={`${Icon.displayName || Icon.name}-${index}`}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="border border-gray-300 p-2 text-gray-600 transition hover:bg-black hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white px-6 py-6 text-black sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-xs font-semibold uppercase text-gray-500 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Minerva Solutions. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-6">
            {bottomLinks.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </div>
          <button
            type="button"
            onClick={handleBackToTop}
            className="flex items-center gap-2 border border-gray-300 px-3 py-2 text-xs font-semibold uppercase text-gray-600 transition hover:bg-black hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
