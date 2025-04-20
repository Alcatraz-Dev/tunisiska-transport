"use client";
import { useTheme } from "next-themes";
import React from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";

function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-full hover:cursor-pointer "
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <MoonIcon
          className="absolute h-6 w-6 transform transition-transform duration-700 ease-in-out
        text-gradient-to-r from-transparent text-blue-500 to-transparent 
             rotate-180 scale-0 opacity-0
             dark:rotate-0 dark:scale-100 dark:opacity-100"
        />
        <SunIcon
          className="absolute h-6 w-6 transform transition-transform duration-700 ease-in-out
             rotate-0 scale-100 opacity-100  text-gradient-to-r from-transparent text-yellow-500 to-transparent 
             dark:-rotate-180 dark:scale-0 dark:opacity-0"
        />
      </Button>
    </div>
  );
}

export default ThemeToggle;
