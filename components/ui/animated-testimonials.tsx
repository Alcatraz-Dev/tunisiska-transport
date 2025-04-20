"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import type { AnimatedTestimonialsInnerProps } from "./animated-testimonials-inner";

const AnimatedTestimonialsInner = dynamic(
  () => import("./animated-testimonials-inner").then((mod) => mod.AnimatedTestimonialsInner),
  {
    ssr: false,
    loading: () => <div className="text-center py-20">Loading testimonials...</div>,
  }
);

export const AnimatedTestimonials = (props: AnimatedTestimonialsInnerProps) => {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading testimonials...</div>}>
      <AnimatedTestimonialsInner {...props} />
    </Suspense>
  );
};