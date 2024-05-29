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
        "I completed a summer internship at Gateway, a leading company in the web development industry, where I worked with a team of talented developers and designers to deliver high-quality projects using ReactJs, TypeScript, Git and Github, teamworking, scrum and more.",
    },
    {
      company: "Self Tought Developer",
      badges: [],
      title: "Starter → Full Stack Developer",
      start: "2021",
      description:
        "I began my journey by learning Java at university, where I created several projects to solidify my understanding of programming and object-oriented programming (OOP) concepts. After gaining a solid foundation in Java, I transitioned to learning JavaScript and ReactJs. Today, I am a full-stack developer.",
    },
    {
      company: "Graphic Designer",
      badges: ["freelance"],
      title: "Starter → intermediate",
      start: "2013",
      end: "2020",
      description:
        "I embarked on my journey as a graphic designer using Photoshop. Over time, I progressed to an intermediate level in graphic design by incorporating Illustrator and other tools into my skill set.",
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
        "The official website for the Erbil Center for Reading and Memorizing the Holy Quran.(under construction)",
    },
    {
      title: "Moon App (مانگ)",
      techStack: [
        "App Developer",
        "Ui/Ux designer",
        "Git",
        "Flutter",
        "Firebase",
        "UI/UX",
        "Figma",
      ],
      description:
        "The first modern Kurdish trivia app for Islamic questions and answers is now available on the Google Play Store and will soon be available on the App Store.",
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
      title: "Play Tic Tac Toe with Ai",
      techStack: ["React", "Tailwind", "Git", "Vite"],
      description:
        "The first modern Kurdish trivia app for Islamic questions and answers is now available on the Google Play Store and will soon be available on the App Store.",
      link: {
        label: "Ai Tic Tac Toe",
        href: "https://maestro-ai-tic-tac-toe-app.netlify.app/",
      },
    },
  ],
} as const;
