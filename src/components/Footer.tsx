"use client";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { professionalLinks } from "@/data/professionalLinks.data";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Footer = () => {
  return (
    <BackgroundBeamsWithCollision>
      <footer className="w-full px-6 py-10 text-gray-400 bg-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left: Short About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Yash</h2>
            <p className="text-sm leading-relaxed">
              Full-Stack Dev & Tech Explorer — building useful tools, writing
              clean code, and sharing the journey.
            </p>
          </div>

          {/* Middle: Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Pages</h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start gap-5 mt-2">
              <AnimatedTooltip items={professionalLinks} />
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-xs mt-10 text-neutral-500">
          © {new Date().getFullYear()} Yash — Built with 💻 & ☕
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  );
};

const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Project",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
    {
      name: "Contact Me",
      link: "/contact",
    },
  ];

export default Footer;
