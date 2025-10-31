import { iEditorBg, imagoBg, notemarkBg, vibeBg } from "../assets/project";
import type { ProjectType } from "../types/project-types";
import { LuGlobe, LuGithub, LuFileText, LuBox } from "react-icons/lu";

export const projects: ProjectType[] = [
  {
    title: "Vibe",
    desc: "Let's vibe code your next saas/agency website with Vibe. With vibe you can create anything from a landing page to a full blown react website in minutes. No need to code just ask. Let's vibe, let's create.",
    image: vibeBg,
    type: "website",
    tags: ["Next.js", "TailwindCSS", "Shadcn", "Inngest", "TRPC", "Prisma"],
    links: [
      {
        url: "https://github.com/imsudipcreator/vibe",
        icon: LuGithub,
        alias: "Source Code",
      },
      { url: "https://vibe-imago.vercel.app/", icon: LuGlobe, alias: "Demo" },
    ],
  },
  {
    title: "Imago llc",
    desc: "Imago llc is the parent company of all my projects. Here you can find open source projects like Imago Creator which is a webapp for creating websites with vanilla js, Intelligence which is our open source full fledged AI backed by Tool-User-Ai api and many more.",
    image: imagoBg,
    type: "website",
    tags: ["Next.js", "TailwindCSS", "TRPC", "Prisma"],
    links: [
      {
        url: "https://github.com/imsudipcreator/imagollc",
        icon: LuGithub,
        alias: "Source Code",
      },
      { url: "https://imagollc.vercel.app/", icon: LuGlobe, alias: "Demo" },
    ],
  },
  {
    title: "Notemark",
    desc: "It is a modern, lightweight, and elegant Markdown note-taking app built with Electron + React + TypeScript. It’s designed for developers, writers, and students who want a clean distraction-free writing environment with support for code blocks, blockquotes, lists, and more.",
    image: notemarkBg,
    type: "app",
    tags: ["Electron", "React", "TypeScript", "Jotai", "Lodash"],
    links: [
      {
        url: "https://github.com/imsudipcreator/Notemark",
        icon: LuGithub,
        alias: "Source Code",
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
    desc: "Stupidest code editor ever.",
    image: iEditorBg,
    type: "app",
    tags: ["React", "TypeScript", "CodeMirror", "Radix UI", "TailwindCSS"],
    links: [
      {
        url: "https://github.com/imsudipcreator/ImagoEditor",
        icon: LuGithub,
        alias: "Source Code",
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
    desc: "Tool User AI is a free and open source tool to a api which takes some query as input and processess the query with llm models and returns the response to the user with the help of langchain it has access to a lot tools like wiki search, image generation etc.",
    image: null,
    type: "api",
    tags: ["Python", "FastApi", "Uvicorn", "Langchain"],
    links: [
      {
        url: "https://github.com/imsudipcreator/tool-user-ai",
        icon: LuGithub,
        alias: "Source Code",
      },
      {
        url: "https://tool-user-ai.onrender.com/docs",
        icon: LuFileText,
        alias: "Documentation",
      },
    ],
  },
  {
    title: "Link Up",
    desc: "A Social media for the genz",
    image: null,
    type: "app",
    tags: ["React Native", "Expo", "Supabase"],
    links: [
      {
        url: "https://github.com/imsudipcreator/LinkUp",
        icon: LuGithub,
        alias: "Source Code",
      },
    ],
  },
  {
    title: "Appa AI",
    desc: "Appa AI is a large language model trained on a chat between me and my friend. Currently its development process is paused cause my current laptop can't handle this much.",
    image: null,
    type: "api",
    tags: ["Python", "Jupyter"],
    links: [
      {
        url: "https://github.com/imsudipcreator/appa-ai",
        icon: LuGithub,
        alias: "Source Code",
      },
    ],
  },
  {
    title: "Converter",
    desc: "Converter is a free and open source tool for converting between different units of measurement. (ex:- binary to decimal, decimal to octal etc.)",
    image: null,
    type: "terminal",
    tags: ["C", "Linux"],
    links: [
      {
        url: "https://github.com/imsudipcreator/C-Mini-Projects/tree/main/number_system_converter",
        icon: LuGithub,
        alias: "Source Code",
      },
    ],
  },
  {
    title: "3D Portfolio",
    desc: "3D Portfolio is my first time trying out three.js.",
    image: null,
    type: "website",
    tags: ["React", "ThreeJS", "TailwindCSS"],
    links: [
      {
        url: "https://github.com/imsudipcreator/3D-Portofolio",
        icon: LuGithub,
        alias: "Source Code",
      },
      {
        url: "https://3d-portofolio-kappa.vercel.app/",
        icon: LuGlobe,
        alias: "Demo",
      },
    ],
  },
];
