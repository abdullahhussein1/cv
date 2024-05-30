import { GitHubIcon, LinkedInIcon, BehanceIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abdullah Hussein",
  initials: "AH",
  location: "Ranya, As-Sulaymaniyyah, Iraq",
  locationLink: "https://www.google.com/maps/place/ranya",
  about:
    "Software Engineer committed to deep work, ensuring products are built with exceptional attention to detail.",
  summary: `As a Software Engineer, I create cutting-edge frontend solutions. My background in graphic design ensures visually appealing, functional interfaces.`,
  avatarUrl:
    "https://avatars.githubusercontent.com/u/78323851?u=303a81a028fb8c5c473d4a822c6fbff57b47af9c&v=4",
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
        "Started my journey by learning Java at university, creating several projects to solidify my understanding of programming and OOP concepts. After gaining a solid foundation in Java, I transitioned to learning JavaScript and ReactJs. Today, I am a full-stack developer.",
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
    "JavaScript",
    "TypeScript",
    "React",
    "React Router",
    "Redux/ Redux Kit",
    "Git/GitHub",
    "Tailwind",
    "Sass",
    "Shadcn",
    "Figma",
    "Scrum",
    "Trello",
    "Vite",
    "Teamwork",
    "Node.js",
    "Firebase",
    "Supabase",
    "PostgreSQL",
    "Java",
    "Flutter",
    "Photoshop",
    "Illustrator",
  ],
  projects: [
    {
      title: "Erbil Center",
      techStack: [
        "Frontend Developer",
        "React",
        "Tailwind",
        "Git",
        "Firebase",
        "Figma",
      ],
      description:
        "The official website for the Erbil Center for Reading and Memorizing the Holy Quran. (under construction)",
    },
    {
      title: "Moon App (مانگ)",
      techStack: [
        "App Developer",
        "UI/UX Designer",
        "Git",
        "Flutter",
        "Firebase",
        "UI/UX",
        "Figma",
      ],
      description:
        "The first modern Kurdish trivia app for Islamic questions and answers, available on Google Play Store and soon on the App Store.",
      link: {
        label: "مانگ",
        href: "https://play.google.com/store/apps/details?id=com.moon_project.moon_project",
      },
    },
    {
      title: "Soft Steps",
      techStack: [
        "React",
        "TypeScript",
        "Git",
        "Vite",
        "Supabase",
        "UI/UX",
        "Auth (GitHub/Google)",
        "Netlify",
      ],
      description:
        "A complete Todo App built with React, TypeScript, Supabase, Express, Shadcn, and Authentication.",
      link: {
        label: "softsteps.netlify.app",
        href: "https://softsteps.netlify.app/",
      },
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
        "A system for collecting, classifying, and organizing student information to facilitate easier control and analysis of data.",
      link: {
        label: "Student Management System",
        href: "https://github.com/abdullahhussein1/Student-Management-System",
      },
    },
  ],
} as const;
