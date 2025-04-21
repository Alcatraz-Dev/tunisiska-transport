// components/TextRevealComponent.tsx
"use client";

import React from "react";
import {
  TextRevealCard,
} from "../ui/text-reveal-card";

export default function TextRevealComponent() {
  return (
    <div className="flex items-center justify-center  rounded-2xl w-full">
      <TextRevealCard
        className="bg-transparent border-none"
        text="Tunisiska Transport"
        revealText="Tunisiska Transport"
      />
    </div>
  );
}