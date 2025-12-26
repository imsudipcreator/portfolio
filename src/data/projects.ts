import { LuBox, LuFileText, LuGithub, LuGlobe } from "react-icons/lu";
import {
  iEditorBg,
  imagoBg,
  notemarkBg,
  skibidiBg,
  vibeBg,
} from "../assets/project";
import type { ProjectType } from "../types/project-types";

export const projects: ProjectType[] = [
  {
    title: "Skibidi Lang",
    slug: "skibidilang",
    desc: "A Gen-Z programming language with zero cap syntax and full LLVM rizz.",
    image: skibidiBg,
    type: "website",
    tags: ["cpp", "cmake"],
    links: [
      {
        url: "https://github.com/imsudipcreator/skibidi-lang",
        icon: LuGithub,
        alias: "Code",
      },
      {
        url: "https://skibidi-lang.vercel.app/",
        icon: LuGlobe,
        alias: "Landing Page",
      },
    ],
  },
  {
    title: "Vibe",
    slug: "vibe",
    desc: "Let's vibe code your next saas/agency website with Vibe. With vibe you can create anything from a landing page to a full blown react website in minutes. No need to code just ask. Let's vibe, let's create.",
    image: vibeBg,
    type: "website",
    tags: ["nextjs", "tailwindcss", "trpc", "prisma"],
    links: [
      {
        url: "https://github.com/imsudipcreator/vibe",
        icon: LuGithub,
        alias: "Code",
      },
      { url: "https://vibe-imago.vercel.app/", icon: LuGlobe, alias: "Demo" },
    ],
  },
  {
    title: "Imago llc",
    slug: "imagollc",
    desc: "Imago llc is the parent company of all my projects. Here you can find open source projects like Imago Creator which is a webapp for creating websites with vanilla js, Intelligence which is our open source full fledged AI backed by Tool-User-Ai api and many more.",
    image: imagoBg,
    type: "website",
    tags: ["nextjs", "tailwindcss", "trpc", "prisma"],
    links: [
      {
        url: "https://github.com/imsudipcreator/imagollc",
        icon: LuGithub,
        alias: "Code",
      },
      { url: "https://imagollc.vercel.app/", icon: LuGlobe, alias: "Demo" },
    ],
  },
  {
    title: "Notemark",
    slug: "notemark",
    desc: "It is a modern, lightweight, and elegant Markdown note-taking app built with Electron + React + TypeScript. It’s designed for developers, writers, and students who want a clean distraction-free writing environment with support for code blocks, blockquotes, lists, and more.",
    image: notemarkBg,
    type: "app",
    tags: ["electron", "react", "typescript", "lodash"],
    links: [
      {
        url: "https://github.com/imsudipcreator/Notemark",
        icon: LuGithub,
        alias: "Code",
      },
      {
        url: "https://github.com/imsudipcreator/Notemark/releases/tag/v1.1.0",
        icon: LuBox,
        alias: "Releases",
      },
    ],
  },
  {
    title: "Imago Editor",
    slug: "imagoeditor",
    desc: "Stupidest code editor ever. I have no idea why i even thought of building this.",
    image: iEditorBg,
    type: "app",
    tags: ["react", "typescript", "tailwindcss"],
    links: [
      {
        url: "https://github.com/imsudipcreator/ImagoEditor",
        icon: LuGithub,
        alias: "Code",
      },
      {
        url: "https://imago-editor.vercel.app/",
        icon: LuGlobe,
        alias: "Demo",
      },
    ],
  },
  {
    title: "Tool User AI",
    slug: "tooluserai",
    desc: "Tool User AI is a free and open source tool to a api which takes some query as input and processess the query with llm models and returns the response to the user with the help of langchain it has access to a lot tools like wiki search, image generation etc.",
    image: null,
    type: "api",
    tags: ["python", "fastapi"],
    links: [
      {
        url: "https://github.com/imsudipcreator/tool-user-ai",
        icon: LuGithub,
        alias: "Code",
      },
      {
        url: "https://tool-user-ai.onrender.com/docs",
        icon: LuFileText,
        alias: "Docs",
      },
    ],
  },
  {
    title: "Link Up",
    slug: "linkup",
    desc: "A Social media app for the genz",
    image: null,
    type: "app",
    tags: ["reactnative", "expo", "supabase"],
    links: [
      {
        url: "https://github.com/imsudipcreator/LinkUp",
        icon: LuGithub,
        alias: "Code",
      },
    ],
  },
  {
    title: "Appa AI",
    slug: "appaai",
    desc: "Appa AI is a large language model trained on a chat between me and my friend. Currently its development process is paused cause my current laptop can't handle this much.",
    image: null,
    type: "api",
    tags: ["python", "jupyter"],
    links: [
      {
        url: "https://github.com/imsudipcreator/appa-ai",
        icon: LuGithub,
        alias: "Code",
      },
    ],
  },
  {
    title: "Unit Converter",
    slug: "unitconverter",
    desc: "Converter is a free and open source CLI tool for converting between different units of measurement. (ex:- binary to decimal, decimal to octal etc.)",
    image: null,
    type: "terminal",
    tags: ["c", "linux"],
    links: [
      {
        url: "https://github.com/imsudipcreator/C-Mini-Projects/tree/main/number_system_converter",
        icon: LuGithub,
        alias: "Code",
      },
    ],
  },
  {
    title: "3D Portfolio",
    slug: "3dportfolio",
    desc: "3D Portfolio is my first time trying out three.js.",
    image: null,
    type: "website",
    tags: ["react", "threejs", "tailwindcss"],
    links: [
      {
        url: "https://github.com/imsudipcreator/3D-Portofolio",
        icon: LuGithub,
        alias: "Code",
      },
      {
        url: "https://3d-portofolio-kappa.vercel.app/",
        icon: LuGlobe,
        alias: "Demo",
      },
    ],
  },
];
