'use client';
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle/theme-toggle";
import Image from "next/image";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-8";
import { WobbleCardComponent } from "@/components/WobbleCard/WobbleCardComponent";
import { AnimatedTestimonialsComponent } from "@/components/AnimatedTestimonials/AnimatedTestimonialsComponent";
import { TextHoverEffectComponent } from "@/components/TextHoverEffect/TextHoverEffectComponent";
import { AnimatedPinComponent } from "@/components/AnimatedPin/AnimatedPinComponent";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WobbleCardComponent />
      <AnimatedTestimonialsComponent />
      <TextHoverEffectComponent />
      <AnimatedPinComponent />
    </div>
  );
}
