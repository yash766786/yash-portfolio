"use client";
import { BackgroundBeams } from "./ui/background-beams";

export default function About() {
  return (
    <section className="relative h-fit w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased py-20 px-4">
      <div className="max-w-3xl mx-auto z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400">
          About Me
        </h2>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
          Hey, I&apos;m{" "}
          <span className="font-semibold text-white">Yash Kr Choudhary</span> —
          a third-year CSE student at{" "}
          <span className="text-white">NIT Patna</span> passionate about
          building impactful tech solutions and living with discipline.
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
          From social platforms like{" "}
          <span className="text-white">VibeSpace</span> to educational portals
          like <span className="text-white">MusicSchool</span>, I love crafting
          full-stack apps, scalable systems, and diving deep into{" "}
          <span className="text-white">DSA</span> and{" "}
          <span className="text-white">Competitive Programming</span>.
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
          With 700+ problems solved across{" "}
          <span className="text-white">
            LeetCode, Codeforces, CodeChef, GFG
          </span>
          , and involvement in the{" "}
          <span className="text-white">Web & Coding Club</span> and{" "}
          <span className="text-white">NSS (Sankalp)</span>, I&apos;m constantly
          learning, building, and teaching.
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
          What makes me different? I document everything. From early morning
          routines to late-night debugging — I share my journey to inspire
          others through{" "}
          <span className="text-white">discipline, consistency</span> and{" "}
          <span className="text-white">self-awareness</span>.
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
          Whether it’s crafting elegant UIs with{" "}
          <span className="text-white">React</span>, deploying real-time servers
          with <span className="text-white">Node.js & Socket.IO</span>, or
          diving into{" "}
          <span className="text-white">System Design, OS, DBMS</span> — I’m here
          to grow, contribute, and connect.
        </p>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 font-medium">
          Let’s collaborate, connect, or chat about tech, habits, or building a
          better self.
        </p>
      </div>

      <BackgroundBeams />
    </section>
  );
}
