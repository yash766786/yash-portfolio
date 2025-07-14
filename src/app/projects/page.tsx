"use client";
import Carousel from "@/components/ui/carousel";
import { WavyBackground } from "@/components/ui/wavy-background";
import { bigProjects } from "@/data/Projects.data";

export default function Projects() {
  return (
    <div className="relative overflow-hidden w-full h-full ">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <Carousel slides={bigProjects} />
      </WavyBackground>
    </div>
  );
}
