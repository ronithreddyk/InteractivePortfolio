/* ============================================================
   ALL EDITABLE CONTENT LIVES HERE.
   Swap the placeholder contact values and project info below —
   nothing else in the codebase needs touching.
============================================================ */

export const identity = {
  firstName: "Ronith",
  lastName: "Komatireddy",
  tagline: "Builder. Designer. Problem Solver.",
  logo: "RK",
  status: "Available for opportunities · 2026",
};

export const education = {
  eyebrow: "The story so far — Education",
  school: "Montclair State University",
  degree: "B.S. Computer Science",
  gpa: "3.5 GPA",
  yearStart: "2022",
  yearEnd: "2026",
};

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Real Variable",
    period: "Jun 2024 — Jul 2024",
    description:
      "Developed responsive, cross-browser web pages using HTML, CSS, JavaScript, React and Bootstrap. Collaborated with designers to implement Figma mockups into functional user interfaces, iterated based on feedback, and used Git for version control in a team-based, Agile workflow.",
  },
  {
    role: "IT & Marketing Associate",
    company: "Bower School of Entrepreneurship",
    period: "Jun 2025 — Jul 2025",
    description:
      "Partnered with marketing to test layouts and web experiences using React, HTML/CSS, and Figma, lifting average session duration ~25%. Redesigned and rebuilt the landing page and navigation to increase click-through on key calls-to-action ~20%, and delivered fully responsive, cross-browser pages that reduced bounce rate ~15% and modernized the brand's digital presence.",
  },
  {
    role: "Full Stack Engineering Intern",
    company: "Retail Sols Inc",
    period: "Apr 2026 — Aug 2026",
    description:
      "Built and shipped full-stack features across a React/Next.js frontend and Node.js/Express REST APIs — including work on an existing point-of-sale (POS) application — improving page performance through code-splitting and lazy loading. Integrated reusable UI components, debugged integration issues, and collaborated in Agile teams using Git feature-branch workflows and code reviews to ship changes reliably.",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    stack: "React · Next.js · JavaScript · TypeScript · Tailwind CSS",
  },
  {
    title: "Backend Development",
    stack: "Python · Node.js · Express · REST APIs",
  },
  {
    title: "Database & Cloud",
    stack: "PostgreSQL · AWS · Git",
  },
  {
    title: "Interactive Experiences",
    stack: "GSAP · Framer Motion · OpenAI API · Swift",
  },
];

export const projects = [
  {
    title: "Paracosm",
    description: "Turn a single idea into an extraordinary universe. From futuristic cities to mythical kingdoms, Paracosm brings your imagination to life with AI-generated worlds, original characters, and immersive stories. Built as a full-stack AI application.",
    href: "#",
    // Drop the real file at /public/images/paracosm.png (or .jpg) and update:
    image: null as string | null,
    video: "/videos/paracosmfdemo-preview.mp4" as string | null,
    poster: "/videos/paracosmfdemo-poster.jpg" as string | null,
    // Small label shown on the hover preview card — edit this freely.
    tag: "Python • REST • Vanilla • HTML • CSS",
    // Text shown on the right-hand call-to-action.
    cta: "Preview",
    accent: "linear-gradient(135deg,#1c1712,#3a2418 60%,#C8281E)",
  },
  {
    title: "Local Lens",
    description: "Discover restaurants, cafés, attractions, and hidden gems worth visiting through a seamless, map-first experience. Built entirely in SwiftUI with Apple's MapKit framework, Local Lens combines native performance with intuitive location-based exploration.",
    href: "#",
    // Drop the real file at /public/images/local-lens.png (or .jpg) and update:
    image: null as string | null,
    video: "/videos/locallensdemo-preview.mp4" as string | null,
    poster: "/videos/locallensdemo-poster.jpg" as string | null,
    tag: "iOS app",
    cta: "Preview",
    accent: "linear-gradient(135deg,#101418,#22303a 60%,#8B8577)",
  },
  {
    title: "Interactive Portfolio",
    description: "The website you're exploring is this project. A scroll-driven portfolio built to showcase my work through cinematic storytelling, smooth animations, and modern full-stack development. Designed with performance and user experience at its core, every interaction was crafted with intention.",
    href: "#",
    image: null as string | null,
    video: null as string | null,
    poster: null as string | null,
    tag: "Next.js · React · TypeScript · GSAP",
    cta: "About",
    accent: "linear-gradient(135deg,#0f0d0b,#2a2320 55%,#C8281E)",
  },
];

export const contact = {
  heading: ["Let's build something", "unforgettable"],
  rows: [
    { label: "Email", value: "ronithkomatireddy@gmail.com", href: "mailto:ronithkomatireddy@gmail.com" },
    { label: "Phone", value: "+1 (646) 309-3738", href: "tel:+16463093738" },
    { label: "LinkedIn", value: "linkedin.com/in/ronithkomatireddy", href: "https://www.linkedin.com/in/ronithkomatireddy" },
    { label: "GitHub", value: "github.com/ronithreddyk", href: "https://github.com/ronithreddyk" },
  ],
  footer: ["© 2026 Ronith Komatireddy", "Designed & built with intent"],
};
