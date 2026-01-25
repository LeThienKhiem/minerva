"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Send, X } from "lucide-react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-[95%] max-h-[85vh] overflow-y-auto rounded-3xl bg-white shadow-2xl md:w-full md:max-w-4xl md:max-h-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="order-1 flex w-full flex-col gap-8 bg-black p-6 text-white md:w-1/2 md:p-10">
                <div>
                  <h2 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
                    LET&apos;S
                    <br />
                    <span className="text-orange-500">CONNECT</span>
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase text-orange-500">
                    <Mail className="h-4 w-4" />
                    Email
                  </div>
                  <div className="rounded border border-neutral-800 bg-neutral-900 p-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    Minerva.Web3@gmail.com
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase text-orange-500">
                    <Send className="h-4 w-4" />
                    Telegram
                  </div>
                  <div className="rounded border border-neutral-800 bg-neutral-900 p-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    @lenng0102
                  </div>
                  <div className="rounded border border-neutral-800 bg-neutral-900 p-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    @emily123
                  </div>
                </div>
              </div>

              <div className="order-2 relative flex w-full flex-col items-center justify-center gap-8 bg-white p-6 text-black md:w-1/2 md:p-10">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 text-black transition hover:text-orange-500"
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-black">
                  Scan to connect
                </h3>
                <div className="flex h-48 w-48 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MinervaWeb3"
                    alt="QR code"
                    className="h-36 w-36"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
