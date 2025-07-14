"use client";
import Image from "next/image";
import { BackgroundLines } from "./ui/background-lines";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { professionalLinks } from "@/data/professionalLinks.data";
import Link from "next/link";

const words = `A Full-Stack Developer & DSA Enthusiast building powerful web apps — always exploring tech.`;

const HeroSection = () => {
  return (
    <section className="relative w-full h-auto sm:h-[42rem] md:h-[42rem] flex items-center justify-center overflow-hidden py-0 px-4 sm:px-8 md:px-12 xl:px-20">
      <BackgroundLines className="flex flex-col items-center justify-center w-full min-h-[100vh] px-12 py-12">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* LEFT: Text content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm sm:text-base  mb-2 dark:from-white dark:to-gray-200">
              Hi, I&apos;m
            </p>

            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text bg-gradient-to-b from-black to-gray-800 text-gray-500 dark:text-gray-400">
              Yash Kr Choudhary
            </h1>

            <div className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              <TextGenerateEffect words={words} />
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start mb-1 min-h-[10]">
              <div className="absolute">
              <Link
                href="/projects"
                className="px-5 mx-1 py-2 rounded-full border border-white bg-white text-black text-sm font-semibold shadow transition cursor-pointer hover:bg-white dark:hover:bg-black dark:text-black dark:hover:text-white"
              >
                View Projects
              </Link>

              <a
                href="https://drive.google.com/uc?export=download&id=1b43IYn2mfCHrgb8WO-p6i1-daliTysIV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 mx-1 py-2 rounded-full border border-black text-black dark:border-white dark:text-white text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer"
              >
                Download Resume
              </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row items-center justify-center mt-6 mb-10 w-full">
              <AnimatedTooltip items={professionalLinks} />
            </div>
          </div>

          {/* RIGHT: Avatar image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/author.png"
              alt="Yash's Avatar"
              width={320}
              height={320}
              className="rounded-full border-1 border-b-3 border-b-gray-900 shadow-lg w-60 h-60 md:w-80 md:h-80 object-top object-cover"
            />
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default HeroSection;
