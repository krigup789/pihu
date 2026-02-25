export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#Skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently working on an All-in-One Investment Tracker and Financial Freedom Planner",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Open to internship or full-time opportunities",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Finfold: Investment Tracker & Financial Planner",
    des: "A full stack web app to manage and visualize all your investments with built-in financial planning tools.",
    img: "/finfold.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link: "https://finfold.vercel.app/",
  },
  {
    id: 2,
    title: "Python to C/C++ Transpiler",
    des: "A lightweight transpiler that converts Python code into C and C++ for enhanced performance and portability.",
    img: "/transpiler.jpg",
    iconLists: [
      "/python-original.svg",
      "/javascript-original.svg",
      "/html5-original.svg",
      "/css3-original.svg",
    ],
    link: "https://github.com/Godzilla2405/Source_to_source_Transpiler",
  },
];

export const skills = [
  {
    name: "React.js",
    level: "Advanced",
    description:
      "Built multiple projects including SPAs and dashboards using hooks, context API, and component-driven architecture.",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    description:
      "Comfortable using TypeScript in both frontend and backend projects to ensure strong typing and code safety.",
  },
  {
    name: "Node.js",
    level: "Intermediate",
    description:
      "Experience in building REST APIs and handling middleware, routing, and authentication logic.",
  },
  {
    name: "Python",
    level: "Intermediate",
    description:
      "Strong command of Python with a focus on automation and source-to-source transpiler development.",
  },
  {
    name: "C / C++",
    level: "Advanced",
    description:
      "Used extensively in the transpiler project to understand and generate low-level code from Python.",
  },
  {
    name: "Next.js",
    level: "Intermediate",
    description:
      "Built SSR and SSG apps with Next.js, optimizing SEO and performance.",
  },
  {
    name: "MongoDB / Mongoose",
    level: "Basic",
    description:
      "Used for storing and querying project data in full-stack MERN applications.",
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
    description:
      "Version control, branching, pull requests, and team collaboration using Git.",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    description:
      "Styled all my recent frontend projects using Tailwind utility-first CSS framework.",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Source-to-Source Transpiler Developer",
    desc: "Built a Python-to-C/C++ transpiler to convert high-level code into efficient low-level equivalents, showcasing compiler design fundamentals.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer - Investment Planner",
    desc: "Developed a full stack investment tracking and financial planning web app using Next.js, TypeScript, and MongoDB.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Dashboard UI Developer",
    desc: "Designed responsive UI dashboards using React.js and Tailwind CSS for a client’s business analytics platform.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Contributed to frontend optimization and bug fixes in GitHub-hosted React and Node.js-based open source projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/krigup789", // ← Your GitHub link
  },
  {
    id: 2,
    img: "/leetcode5.jpg",
    link: "https://leetcode.com/u/krishguptaofficial01/", // ← Your Twitter/X handle
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/krish-gupta-65bb022b3/", // ← Your LinkedIn profile
  },
];
