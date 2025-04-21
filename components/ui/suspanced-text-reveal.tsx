"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import the animated text component
const TextRevealComponent = dynamic(() => import("../TextReveal/TextRevealComponent"), {
  ssr: false,
});

export default function SuspancedTextReveal() {
  return (
    <Suspense
      fallback={
        <div className="w-full flex justify-center items-center">
          {/* Fallback loader with theme support */}
          <Loader2 className="animate-spin w-10 h-10 text-neutral-400 dark:text-neutral-200" />
          <span className="text-neutral-400 dark:text-neutral-200">Loading Logo...</span>
        </div>
      }
    >
      <TextRevealComponent />
    </Suspense>
  );
}