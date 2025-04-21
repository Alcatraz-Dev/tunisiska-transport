"use client";

import React, { Suspense, useState } from "react";
import { PinContainer } from "../ui/3d-pin";
import { Loader2 } from "lucide-react";

// Sample card data
const cards = [
  {
    title: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    href: "https://twitter.com/mannupaaji",
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // valid image
  },
  {
    title: "Next.js Components",
    description: "Beautifully crafted UI elements for modern web apps.",
    href: "https://nextjs.org",
    image: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=3222&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // broken image
  },
  {
    title: "ShadCN UI",
    description: "Accessible and themable UI components using Tailwind.",
    href: "https://ui.shadcn.com",
    image: "https://images.unsplash.com/photo-1473042904451-00171c69419d?q=80&w=3299&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
];

function Card({ card }: { card: typeof cards[0] }) {
  const [imageError, setImageError] = useState(false);
  const shouldShowImage = card.image && !imageError;

  return (
    <PinContainer title={card.href} href={card.href}>
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black dark:text-white">
          {card.title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 dark:text-slate-400">
            {card.description}
          </span>
        </div>

        <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
          {shouldShowImage ? (
            <img
              src={card.image}
              alt={card.title}
              onError={() => setImageError(true)}
              className="object-cover w-full h-full rounded-lg"
            />
          ) : (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          )}
        </div>
      </div>
    </PinContainer>
  );
}

function CardsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-8  w-full max-w-6xl mx-auto">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

export function AnimatedPinComponent() {
  return (
    <Suspense
      fallback={
        <div className="w-full py-40 flex justify-center items-center gap-2 text-neutral-400">
          <Loader2 className="animate-spin w-6 h-6" />
          Loading Cards...
        </div>
      }
    >
      <CardsGrid />
    </Suspense>
  );
}