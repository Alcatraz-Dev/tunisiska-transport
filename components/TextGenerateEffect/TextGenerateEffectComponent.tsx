"use client";
import clsx from "clsx";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function TextGenerateEffectComponent({
  words,
  className,
}: {
  words: string;
  className?: string;
}) {
  return (
    <TextGenerateEffect
      className={clsx(
        "mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]",
        className
      )}
      
      words={words}
    />
  );
}
