"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import {techStack} from "@/data/techStack.data"

export default function Skills() {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-10 text-black dark:text-white">
          Tech Stack
        </h2>
        <HoverEffect items={techStack} />
      </div>
    </section>
  );
}
