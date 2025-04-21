"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const WorldMapComponent = dynamic(
  () => import("../WorldMap/WorldMapComponent"),
  {
    ssr: false,
  }
);

export default function SuspensedWorldMap() {
  return (
    <Suspense
      fallback={
        <div className="w-full py-40 flex justify-center items-center">
          <Loader2 className="animate-spin w-10 h-10 text-neutral-400" />
          Loading World Map...
        </div>
      }
    >
      <WorldMapComponent />
    </Suspense>
  );
}
