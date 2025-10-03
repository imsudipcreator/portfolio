import { iEditorBg, imagoBg, notemarkBg, vibeBg } from "../assets/project";
import type { ProjectType } from "../types/projectTypes";
import { LuGlobe, LuGithub, LuFileText, LuBox } from "react-icons/lu";

export const projects: ProjectType[] = [
  {
    title: "Vibe",
    desc: "Let's vibe code your next saas/agency website with Vibe.",
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
    desc: "Imago is a free and open source image generation tool.",
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
    desc: "Tool User AI is a free and open source tool for creating AI tools.",
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
    desc: "Appa AI is a large language model trained on a chat between me and my friend.",
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
];
