"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useRef } from "react";

export default function Advanced3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);
  const spotlightX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = (e.clientX - bounds.left) / bounds.width;
    const py = (e.clientY - bounds.top) / bounds.height;
    mouseX.set(px);
    mouseY.set(py);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY }}
      className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl bg-neutral-900"
    >
      {/* Glow + Spotlight Layer */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${spotlightX} ${spotlightY}, rgba(255,255,255,0.1), transparent 60%)`,
        }}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Sparkles */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight />
        <Sparkles
          count={60}
          speed={1.5}
          size={2}
          color="white"
          opacity={0.4}
          scale={[6, 6, 1]}
          noise={2}
        />
      </Canvas>

      {/* Image Layer */}
      <motion.img
        src="/images/avatar.png" // ضع صورة المستخدم أو أي صورة تريدها هنا
        alt="Advanced Card"
        className="w-full h-full object-cover object-center z-0"
      />

      {/* Optional overlay text */}
      <div className="absolute bottom-4 left-4 z-20 text-white">
        <h3 className="text-lg font-semibold">Smart Identity</h3>
        <p className="text-sm text-gray-300">3D Clerk-style effect</p>
      </div>
    </motion.div>
  );
}
