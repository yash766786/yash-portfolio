import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiX,
} from "react-icons/si";

export const professionalLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <SiLinkedin className="w-8 h-8 text-[#0377b6]" />, // LinkedIn Blue
    href: "https://www.linkedin.com/in/yash-kr-choudhary-4823752a7",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <SiX className="w-8 h-8 text-[#ffffff]" />, // Twitter Blue
    href: "https://x.com/YashChoudhary76", 
  },
  {
    id: 3,
    name: "Instagram",
    icon: <SiInstagram className="w-8 h-8 text-[#ab1245]" />, // Instagram Pink
    href: "https://www.instagram.com/yash_kumar766?igsh=MTcxbHhpZ2txY25kaA==",
  },
  {
    id: 4,
    name: "GitHub",
    icon: <SiGithub className="w-8 h-8 text-black dark:text-white" />, // GitHub
    href: "https://github.com/yash766786",
  },
];
