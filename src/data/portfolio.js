export const IDENTITY = {
  name: "Sachin Rajendran",
  tagline: ["Software Tester", "Web Developer", "App Developer", "Cybersecurity Enthusiast"],
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 9342937175",
  email: "sachinrajendran.19@gmail.com",
  github: "https://github.com/sachinrajendran19-star",
  linkedin: "https://www.linkedin.com/in/sachin-rajendran-bb5865367",
  photo: "assets/me.jpg",
  resume: "assets/resume.pdf",
};

export const ABOUT = {
  bio: `Hi, I'm ${IDENTITY.name}.

Final-year Information Technology undergraduate (CGPA: 8.5) with hands-on experience building web applications and database-driven programs in JavaScript, Python, Java, and C through academic and personal projects. Comfortable with Git/GitHub version control, HTML5/CSS3 web fundamentals, and structured problem-solving.

Seeking an entry-level opportunity in software testing, web development, app development, or cybersecurity to apply and grow technical skills in a professional environment.`,
  stats: [
    { value: "8.5", label: "CGPA (B.Tech IT)" },
    { value: "4", label: "Certifications" },
    { value: "3", label: "Projects built" },
    { value: "2", label: "Languages spoken" },
  ],
};

export const SKILLS = [
  { name: "JavaScript", level: "Intermediate", pct: 75 },
  { name: "Python", level: "Intermediate", pct: 72 },
  { name: "Java", level: "Intermediate", pct: 65 },
  { name: "C", level: "Intermediate", pct: 68 },
  { name: "HTML5 & CSS3", level: "Advanced", pct: 82 },
  { name: "MongoDB", level: "Intermediate", pct: 60 },
  { name: "MySQL", level: "Intermediate", pct: 65 },
  { name: "Git & GitHub", level: "Advanced", pct: 80 },
  { name: "JSON", level: "Advanced", pct: 78 },
  { name: "Figma", level: "Beginner", pct: 45 },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    category: "Web",
    description:
      "Fully responsive personal portfolio website presenting skills and projects to recruiters, with a modern mobile-friendly UI and multi-section layout (About, Skills, Projects, Contact).",
    tech: ["HTML5", "CSS3", "JavaScript"],
    year: "2026",
    github: "https://github.com/sachinrajendran19-star",
    live: "",
  },
  {
    title: "JSON-Based Data Management Project",
    category: "Programming",
    description:
      "Data management project built with JavaScript and Python to parse, structure, and manage JSON-based data end to end.",
    tech: ["JavaScript", "Python"],
    year: "2025",
    github: "https://github.com/sachinrajendran19-star",
    live: "",
  },
  {
    title: "Student Database Management System",
    category: "Programming",
    description:
      "Student Database Management System developed in C using file handling to store, update, and retrieve student records.",
    tech: ["C"],
    year: "2025",
    github: "https://github.com/sachinrajendran19-star",
    live: "",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Information Technology",
    org: "Peri Institute of Technology, Chennai",
    period: "Expected Graduation: 2027",
    detail: "CGPA: 8.5",
  },
];

export const CERTIFICATIONS = [
  "Introduction to Python — SoloLearn",
  "Web Development Basics — Wipro",
  "C Programming — NPTEL",
  "Database Handling — Skill Rack",
];

export const LANGUAGES = ["English", "Tamil"];