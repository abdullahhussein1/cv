import { GitHubIcon, LinkedInIcon, BehanceIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abdullah Hussein",
  initials: "AH",
  location: "Ranya, As-Sulaymaniyah, Iraq",
  locationLink: "https://www.google.com/maps/place/ranya",
  about: "Software Engineer • FullStack Developer",
  summary: `As a Software Engineer, I create cutting-edge frontend solutions. My background in graphic design ensures visually appealing, functional interfaces.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/78323851?v=4",
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
        url: "https://www.linkedin.com/in/abdullahhussein01/",
        icon: LinkedInIcon,
      },
      {
        name: "Behance",
        url: "https://www.behance.net/coolboy8",
        icon: BehanceIcon,
      },
    ],
  },
  education: [
    {
      school: "Erbil Polytechnic University",
      degree: "Bachelor's Degree in Information Systems Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  language: [
    {
      name: "Kurdish",
      level: "Native",
      code: "",
    },
    {
      name: "English",
      level: "Upper-intermediate",
      code: "B2",
    },
    {
      name: "Arabic",
      level: "Intermediate",
      code: "B1",
    },
  ],
  work: [
    {
      company: "Gateway",
      link: "https://the-gw.com/",
      badges: ["On-Site"],
      title: "Frontend Developer",
      start: "July",
      end: "September 2023",
      description:
        "Completed a summer internship at Gateway, a leading web development company, collaborating with talented developers and designers to deliver high-quality projects using ReactJs, TypeScript, Git, GitHub, Scrum, and more.",
    },
    {
      company: "Self-Taught Developer",
      badges: [],
      title: "Starter → Full Stack Developer",
      start: "2021",
      description:
        "Began with Java at university, building projects to grasp programming and OOP. Transitioned to JavaScript and ReactJs, now a full-stack developer.",
    },
    {
      company: "Graphic Designer",
      badges: ["Freelance"],
      title: "Starter → Intermediate",
      start: "2013",
      end: "2020",
      description:
        "Embarked on my journey as a graphic designer using Photoshop. Over time, progressed to an intermediate level by incorporating Illustrator and other tools into my skill set.",
    },
  ],
  skills: [
    "NextJs",
    "React",
    "ReactRouter",
    "Redux/ReduxToolKit",
    "TypeScript",
    "JavaScript",
    "Git/GitHub",
    "Firebase",
    "Supabase",
    "PostgreSQL",
    "Tailwind",
    "Sass",
    "Shadcn",
    "Figma",
    "Scrum",
    "Trello",
    "FastTyping",
    "Vite",
    "Teamwork",
    "Node.js",
    "Java",
    "Flutter",
    "Photoshop",
    "Illustrator",
  ],
  projects: [
    {
      title: "Dev Store",
      techStack: [
        "NextJs",
        "SSR",
        "E-Commerce",
        "FullStack",
        "Supabase",
        "Vercel",
        "Mulit-Language",
      ],
      link: {
        label: "Dev Store Website",
        href: "https://devstorekrd.vercel.app",
      },
      description: "Power Your Coding Journey",
    },
    {
      title: "Connect",
      techStack: [
        "FullStack",
        "React",
        "ReduxtoolKit",
        "Firebase",
        "Realtime",
        "Git",
        "Vite",
        "UI/UX",
        "Auth (Google)",
      ],
      link: {
        label: "Connect App",
        href: "https://chatapp-c8b0f.web.app/",
      },
      description:
        "A real time chat app using modern tools, also with modern UI/UX",
    },
    {
      title: "Soft Steps",
      techStack: [
        "FullStack",
        "React",
        "TypeScript",
        "Supabase",
        "Git",
        "Vite",
        "UI/UX",
        "Auth (GitHub/Google)",
        "Netlify",
      ],
      description: "A complete Task Manager App",
      link: {
        label: "softsteps.netlify.app",
        href: "https://softsteps.netlify.app/",
      },
    },

    {
      title: "Moon App (مانگ)",
      techStack: [
        "App Developer",
        "UI/UX Designer",
        "Flutter",
        "Firebase",
        "Git",
        "UI/UX",
        "Figma",
      ],
      description: "The First Modern Islamic Kurdish Trivia App.(IOS, andriod)",
      link: {
        label: "مانگ",
        href: "https://onelink.to/eukhkv",
      },
    },
    {
      title: "Erbil Center",
      techStack: [
        "Frontend Developer",
        "React",
        "Firebase",
        "Tailwind",
        "Git",
        "Figma",
      ],
      description: "Erbil Center for Reading and Memorizing the Holy Quran.",
    },
    {
      title: "Play Tic Tac Toe with Solo/Duo",
      techStack: ["React", "Tailwind", "Git", "Vite"],
      description:
        "A Tic Tac Toe game built with modern web technologies and Amazing Ui/Ux.",
      link: {
        label: "Solo-Duo Tic Tac Toe",
        href: "https://maestro-ai-tic-tac-toe-app.netlify.app/",
      },
    },
    {
      title: "Student Management System",
      techStack: ["Java", "Java Swing", "UI/UX"],
      description:
        "A system for collecting, classifying, and organizing student information.",
      link: {
        label: "Student Management System",
        href: "https://github.com/abdullahhussein1/Student-Management-System",
      },
    },
  ],
} as const;
