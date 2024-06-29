import { GitHubIcon, LinkedInIcon, BehanceIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammed Yassin Mala",
  initials: "MH",
  location: "Soran, As-Erbil, Iraq",
  locationLink: "https://www.google.com/maps/place/soran",
  summary: `Dedicated and ambitious Information System/IT-Specialist student aspiring to pursue a Master's
Degree, aiming to advance academic pursuits and contribute to the community by gaining
comprehensive knowledge and its practical application. With a proven track record of obtaining
a Bachelor's Degree and completing impactful internships, I am committed to continuous
learning, practical application, and confident that my academic achievements make me a strong
candidate for this esteemed scholarship.`,
  avatarUrl:
    "https://mir-s3-cdn-cf.behance.net/user/115/dd51fa997678197.6671a6e383ef4.jpg",
  contact: {
    email: "mhamadyasin112@gmail.com",
    tel: "+9647501432161",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/muhamedyasin",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammed-yassin-mala-51277a269",
        icon: LinkedInIcon,
      },
      {
        name: "Behance",
        url: "https://www.behance.net/mhamadyasinmala",
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
      title: "Starter → Front-end Developer",
      start: "2022",
      description:
        "Began with Java at university, building projects to grasp programming and OOP. Transitioned to JavaScript and ReactJs, now a front-end developer.",
    },
    {
      company: "Graphic Designer",
      badges: ["Freelance"],
      title: "Starter → Intermediate",
      start: "2022",
      description:
        "Embarked on my journey as a graphic designer using Photoshop. Over time, progressed to an Intermediate level by incorporating Adobe XD and other tools into my skill set.",
    },
    {
      company: "One-month Bootcamp",
      badges: [],
      title: "Front-End Bootcamp Rwanga Foundation ",
      start: "Dec 2021",
      end: "Mar 2022",
      description: "30 intensive hours of working on various projects",
    },
  ],
  skills: [
    "IT-Specialist",
    "Software Development",
    "Designing & Coding",
    "Front End Developer",
    "Graphic Designing",
    "Software Engineering",
    "Programming",
    "JavaScript",
    "Java",
    "Tailwind",
    "Git/GitHub",
    "Teamwork",
    "Supabase",
    "oracleSQL",
    "Figma",
    "Adobe XD",
    "Photoshop",
  ],
  projects: [
    //   {
    //     title: "Erbil Center",
    //     techStack: [
    //       "Frontend Developer",
    //       "React",
    //       "Tailwind",
    //       "Git",
    //       "Firebase",
    //       "Figma",
    //     ],
    //     description:
    //       "The official website for the Erbil Center for Reading and Memorizing the Holy Quran. (under construction)",
    //   },
    //   {
    //     title: "Moon App (مانگ)",
    //     techStack: [
    //       "App Developer",
    //       "UI/UX Designer",
    //       "Git",
    //       "Flutter",
    //       "Firebase",
    //       "UI/UX",
    //       "Figma",
    //     ],
    //     description:
    //       "The first modern Kurdish trivia app for Islamic questions and answers, available on Google Play Store and soon on the App Store.",
    //     link: {
    //       label: "مانگ",
    //       href: "https://play.google.com/store/apps/details?id=com.moon_project.moon_project",
    //     },
    //   },
    //   {
    //     title: "Soft Steps",
    //     techStack: [
    //       "React",
    //       "TypeScript",
    //       "Git",
    //       "Vite",
    //       "Supabase",
    //       "UI/UX",
    //       "Auth (GitHub/Google)",
    //       "Netlify",
    //     ],
    //     description:
    //       "A complete Todo App built with React, TypeScript, Supabase, Express, Shadcn, and Authentication.",
    //     link: {
    //       label: "softsteps.netlify.app",
    //       href: "https://softsteps.netlify.app/",
    //     },
    //   },
    //   {
    //     title: "Play Tic Tac Toe with Solo/Duo",
    //     techStack: ["React", "Tailwind", "Git", "Vite"],
    //     description:
    //       "A Tic Tac Toe game built with modern web technologies and Amazing Ui/Ux.",
    //     link: {
    //       label: "Solo-Duo Tic Tac Toe",
    //       href: "https://maestro-ai-tic-tac-toe-app.netlify.app/",
    //     },
    //   },
    //   {
    //     title: "Student Management System",
    //     techStack: ["Java", "Java Swing", "UI/UX"],
    //     description:
    //       "A system for collecting, classifying, and organizing student information to facilitate easier control and analysis of data.",
    //     link: {
    //       label: "Student Management System",
    //       href: "https://github.com/abdullahhussein1/Student-Management-System",
    //     },
    //   },
  ],
} as const;
