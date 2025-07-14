import {
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiNextdotjs,
    SiPrisma,
    SiPostgresql,
    SiTypescript,
    SiFlutter,
    SiFirebase,
    SiDart,
    SiVuedotjs,
    SiLaravel,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiMapbox,
    SiRedux,
    SiExpress,
    SiStripe,
} from "react-icons/si";

export const bigProjects = [
    {
        title: "Taskify",
        description:
            "A simple and intuitive task management web app for organizing your daily to-dos and priorities.",
        src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        techStack: [
            <SiReact className="w-8 h-8 text-cyan-400" key="react" />,
            <SiNodedotjs className="w-8 h-8 text-green-600" key="node" />,
            <SiMongodb className="w-8 h-8 text-green-700" key="mongo" />,
            <SiTailwindcss className="w-8 h-8 text-sky-400" key="tailwind" />,
        ],
        link: "https://github.com/yash766786",
    },
    {
        title: "CodeConnect",
        description:
            "A platform for developers to share code snippets, collaborate on projects, and ask technical questions.",
        src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        techStack: [
            <SiNextdotjs
                className="w-8 h-8 text-black dark:text-white"
                key="next"
            />,
            <SiPrisma className="w-8 h-8 text-gray-300" key="prisma" />,
            <SiPostgresql className="w-8 h-8 text-indigo-500" key="pg" />,
            <SiTypescript className="w-8 h-8 text-blue-400" key="ts" />,
        ],
        link: "https://github.com/yash766786",
    },
    {
        title: "FitTrack",
        description:
            "A fitness tracker that lets users log workouts, monitor progress, and set personal goals.",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        techStack: [
            <SiFlutter className="w-8 h-8 text-blue-500" key="flutter" />,
            <SiFirebase className="w-8 h-8 text-yellow-500" key="firebase" />,
            <SiDart className="w-8 h-8 text-sky-600" key="dart" />,
        ],
        link: "https://github.com/yash766786",
    },
    {
        title: "EduLearn",
        description:
            "An e-learning platform offering interactive courses, quizzes, and progress tracking.",
        src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        techStack: [
            <SiVuedotjs className="w-8 h-8 text-green-400" key="vue" />,
            <SiLaravel className="w-8 h-8 text-red-500" key="laravel" />,
            <SiMysql className="w-8 h-8 text-blue-500" key="mysql" />,
        ],
        link: "https://github.com/yash766786",
    },
    {
        title: "TravelGo",
        description:
            "A responsive travel booking site with map integration, real-time pricing, and hotel reviews.",
        src: "https://c4.wallpaperflare.com/wallpaper/993/439/626/the-sky-clouds-flight-nature-wallpaper-thumb.jpg",
        techStack: [
            <SiHtml5 className="w-8 h-8 text-orange-600" key="html" />,
            <SiCss3 className="w-8 h-8 text-blue-600" key="css" />,
            <SiJavascript className="w-8 h-8 text-yellow-400" key="js" />,
            <SiMapbox className="w-8 h-8 text-teal-400" key="mapbox" />,
        ],
        link: "https://github.com/yash766786",
    },
    {
        title: "ShopSwift",
        description:
            "A modern ecommerce app featuring user authentication, cart, payment integration, and admin dashboard.",
        src: "https://5.imimg.com/data5/SELLER/Default/2022/12/IO/UN/MI/8316222/e-commerce-website-design-service.png",
        techStack: [
            <SiReact className="w-8 h-8 text-cyan-400" key="react" />,
            <SiRedux className="w-8 h-8 text-purple-500" key="redux" />,
            <SiExpress className="w-8 h-8 text-zinc-400" key="express" />,
            <SiStripe className="w-8 h-8 text-indigo-600" key="stripe" />,
        ],
        link: "https://github.com/yash766786",
    },
];