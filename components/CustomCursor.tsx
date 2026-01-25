"use client";

import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useSpring(0, { stiffness: 120, damping: 20, mass: 0.3 });
  const cursorY = useSpring(0, { stiffness: 120, damping: 20, mass: 0.3 });

  useEffect(() => {
    const setCenter = () => {
      cursorX.set(window.innerWidth / 2);
      cursorY.set(window.innerHeight / 2);
    };

    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    setCenter();
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", setCenter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", setCenter);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 mix-blend-screen"
      style={{ x: cursorX, y: cursorY }}
    />
  );
}
