"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../logo/logo.png";

const navItems = [
  { label: "WHAT WE DO", href: "#services" },
  { label: "WORK", href: "#work" },
  { label: "WHY MINERVA", href: "#why-us" },
  { label: "CLIENTS", href: "#clients" },
  { label: "CONTACT", href: "#contact" },
];

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleWindowScroll();
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between px-6 pb-20 pt-8 sm:px-10 lg:px-16">
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Minerva logo"
              className="h-7 w-auto"
              priority
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleScroll(event, item.href)}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="#contact"
              onClick={(event) => handleScroll(event, "#contact")}
              className="rounded-sm bg-orange-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-orange-400"
            >
              LET&apos;S TALK
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="z-50 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-black/95 text-white backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  handleScroll(event, item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="text-3xl font-bold uppercase tracking-[0.2em] transition-colors hover:text-orange-500"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(event) => {
                handleScroll(event, "#contact");
                setIsMobileMenuOpen(false);
              }}
              className="rounded-sm bg-orange-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-orange-400"
            >
              LET&apos;S TALK
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="mt-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
        <p className="text-base font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-lg">
          THE WORLD HASN&apos;T SEEN
        </p>
        <h1 className="mt-4 text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-orange-500 sm:text-7xl md:text-8xl lg:text-9xl">
          YOUR BEST
          <br />
          WORK YET
        </h1>
        <p className="mt-4 text-4xl font-semibold uppercase tracking-[0.2em] text-white sm:text-5xl">
          HAVE YOU ?
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            onClick={(event) => handleScroll(event, "#work")}
            className="flex items-center gap-2 bg-orange-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-orange-400"
          >
            VIEW OUR WORK <span aria-hidden="true">→</span>
          </a>
          <a
            href="#contact"
            onClick={(event) => handleScroll(event, "#contact")}
            className="border border-white/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="mt-20 text-center">
          <span className="text-[#FF4D00] font-bold text-sm tracking-[0.2em] mb-4 uppercase block">
            ABOUT MINERVA
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Your Creative Voice in the Blockchain World
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Minerva is a pioneering Web3 creative agency based in Da Nang, Vietnam. We
            combine creativity, technology, and nearly a decade of cross-industry brand
            experience to help Web3 projects stand out, scale up, and grow sustainably.
            From Vietnam’s emerging innovation hub, we support both global and local teams
            with creative solutions that connect communities and strengthen brands - online,
            offline, and everywhere in between.
          </p>
        </div>
      </main>
    </div>
  );
}
