'use client';

import HeroSection from "@/components/hero-section";
import { WobbleCardComponent } from "@/components/WobbleCard/WobbleCardComponent";
import { AnimatedTestimonialsComponent } from "@/components/AnimatedTestimonials/AnimatedTestimonialsComponent";
import { TextHoverEffectComponent } from "@/components/TextHoverEffect/TextHoverEffectComponent";
import { AnimatedPinComponent } from "@/components/AnimatedPin/AnimatedPinComponent";
import { FeaturesSection3DComponent } from "@/components/FeaturesSection3D/FeaturesSection3DComponent";
import { CardEffectsComponent } from "@/components/CardsEffects/CardEffectsComponent";
import { CanvasRevealEffectComponent } from "@/components/CanvasRevealEffect/CanvasRevealEffectComponent";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection3DComponent/>
      {/* <CardEffectsComponent /> */}
      {/* <FeaturesSection /> */}
      <WobbleCardComponent />
      <AnimatedTestimonialsComponent />
      <TextHoverEffectComponent />
      <AnimatedPinComponent />
      <CanvasRevealEffectComponent/>
    </div>
  );
}
