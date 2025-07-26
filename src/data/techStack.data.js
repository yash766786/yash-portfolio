import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiAppwrite,
  SiCloudinary,
  SiSocketdotio,
  SiCplusplus,
  SiC,
  SiPython,
  SiGit,
} from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";

export const techStack = [
  {
    name: "HTML",
    icon: <SiHtml5 className="w-8 h-8 text-orange-600" />,
  },
  { name: "CSS", icon: <SiCss3 className="w-8 h-8 text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-8 h-8 text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8 text-blue-600" />,
  },
  { name: "C", icon: <SiC className="w-8 h-8 text-blue-700" /> },
  {
    name: "C++",
    icon: <SiCplusplus className="w-8 h-8 text-blue-800" />,
  },
  { name: "Java", icon: <FaJava className="w-8 h-8 text-red-500" /> },
  {
    name: "Python",
    icon: <SiPython className="w-8 h-8 text-yellow-500" />,
  },
  {
    name: "React.js",
    icon: <SiReact className="w-8 h-8 text-cyan-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-8 h-8 text-green-600" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-8 h-8 text-gray-500" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-8 h-8 text-green-700" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-8 h-8 text-blue-700" />,
  },
  {
    name: "Appwrite",
    icon: <SiAppwrite className="w-8 h-8 text-pink-500" />,
  },
  {
    name: "Cloudinary",
    icon: <SiCloudinary className="w-8 h-8 text-blue-300" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8 text-teal-400" />,
  },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio className="w-8 h-8 text-gray-700 dark:text-white" />,
  },
  { name: "Git", icon: <SiGit className="w-8 h-8 text-orange-500" /> },
];
