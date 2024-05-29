import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abdullah Hussein",
  initials: "AH",
  location: "Ranya, As-Sulaymaniyyah, Iraq",
  locationLink: "https://www.google.com/maps/place/ranya",
  about:
    "Software Developer focused on building products with extra attention to detail",
  summary: `As a computer engineer, I create cutting-edge frontend solutions. My graphic design background ensures visually appealing, functional interfaces.
    During a recent internship at Gateway, I worked with ReactJs, TypeScript, git and github, and more. I gained skills in responsive design, accessibility, and performance optimization. I'm eager to tackle new frontend development challenges.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/78323851?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "aduli.maestro11@gmail.com",
    tel: "+9647511883299",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/abdullahhussein1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdullah-hussein-%F0%9F%87%B5%F0%9F%87%B8-683106224",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: " Erbil Polytechnic University",
      degree: "Bachelor's Degree in Information Systems Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Gateway",
      link: "https://the-gw.com/",
      badges: ["On-Site"],
      title: "Frontend Developer",
      start: "july",
      end: "september 2023",
      description:
        "I recently completed a summer internship at Gateway, a leading company in the web development industry, where I worked with a team of talented developers and designers to deliver high-quality projects using ReactJs, TypeScript, Git and Github, teamworking, scrum and more.",
    },
    {
      company: "Self Tought",
      badges: [],
      title: "Start of the journey → Full Stack Developer",
      start: "2021",
      description:
        "I began my journey by learning Java at university, where I created several projects to solidify my understanding of programming and object-oriented programming (OOP) concepts. After gaining a solid foundation in Java, I transitioned to learning JavaScript and ReactJs. Today, I am a full-stack developer.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Scrum",
    "Trello",
    "Vite",
    "Git/Github",
    "TeamWork",
    "Node.js",
    "Firebase",
    "Supabase",
    "PostgreSQL",
    "Tailwind",
    "Sass",
    "Shadcn",
    "Java",
    "Figma",
    "Photoshop",
    "Illustrator",
  ],
  projects: [
    {
      title: "Soft Steps",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Supabase",
        "UI/UX",
        "Auth(Github/Google)",
        "netlify",
      ],
      description:
        "A complete Todo App Build with React, TypeScript, Supabase, Express, Shadcn, Authentication.",
      link: {
        label: "softsteps.netlify.app",
        href: "https://softsteps.netlify.app/",
      },
    },
    {
      title: "Moon App (مانگ)",
      techStack: [
        "App Developer",
        "Ui/Ux designer",
        "Flutter",
        "Firebase",
        "UI/UX",
        "Figma",
      ],
      description:
        "The first modern Kurdish trivia app for Islamic questions and answers is now available on the Google Play Store and will soon be available on the App Store.",
      logo: MonitoLogo,
      link: {
        label: "مانگ",
        href: "https://play.google.com/store/apps/details?id=com.moon_project.moon_project",
      },
    },
    {
      title: "Erbil Center",
      techStack: [
        "Frontend Developer",
        "React",
        "Tailwind",
        "Firebase",
        "Figma",
      ],
      description:
        "The first modern Kurdish trivia app for Islamic questions and answers is now available on the Google Play Store and will soon be available on the App Store.",
      logo: MonitoLogo,
      link: {
        label: "مانگ",
        href: "https://play.google.com/store/apps/details?id=com.moon_project.moon_project",
      },
    },
    {
      title: "Play Tic Tac Toe with Ai",
      techStack: ["React", "Tailwind"],
      description:
        "The first modern Kurdish trivia app for Islamic questions and answers is now available on the Google Play Store and will soon be available on the App Store.",
      logo: MonitoLogo,
      link: {
        label: "Ai Tic Tac Toe",
        href: "https://maestro-ai-tic-tac-toe-app.netlify.app/",
      },
    },
  ],
} as const;
