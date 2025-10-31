import type { ChatType } from "@/types/chat-types";
import { getRandomUUID } from "@/utils/get-random-uuid";
import { LuGithub } from "react-icons/lu";

export const demoChat: ChatType[] = [
  {
    id: getRandomUUID(),
    type: "user",
    message: "Hey there!",
  },
  {
    id: getRandomUUID(),
    type: "ai",
    message:
      "Hey! 👋 How’s it going? I’m your AI coding companion — ready to help with debugging, explaining concepts, or even brainstorming project ideas. What are you working on today?",
    references: [
      {
        title: "Github",
        url: "https://github.com/imsudipcreator",
        icon: LuGithub,
      },
    ],
  },
  {
    id: getRandomUUID(),
    type: "user",
    message: "I'm building a small React app but it’s getting messy.",
  },
  {
    id: getRandomUUID(),
    type: "ai",
    message:
      "Totally understand — small projects can get messy fast, especially as you add features. A good step is to separate your logic and UI early. For example, move API calls and helper functions into dedicated hooks or utility files. Also, consider using components that focus on one clear responsibility each.",
  },
  {
    id: getRandomUUID(),
    type: "user",
    message:
      "Yeah, I haven’t organized components yet. Any folder structure suggestions?",
  },
  {
    id: getRandomUUID(),
    type: "ai",
    message:
      "Sure! A clean React folder structure could look like this:\n\n```\nsrc/\n ├── components/\n ├── hooks/\n ├── pages/\n ├── utils/\n ├── context/\n ├── assets/\n └── App.tsx\n```\n\nThis keeps things modular and scalable. You can also add a `types/` folder if you're using TypeScript to manage shared interfaces and types.",
  },
  {
    id: getRandomUUID(),
    type: "user",
    message: "Nice. Should I use Redux or Context API?",
  },
  {
    id: getRandomUUID(),
    type: "ai",
    message:
      "If your app is small or medium-sized, the Context API is often enough. It’s built into React and great for managing global states like theme, user info, or auth. But if you expect complex state logic, caching, or performance optimization — Redux Toolkit is a more powerful and scalable option.",
  },
  {
    id: getRandomUUID(),
    type: "user",
    message: "What about animations? I want it to look modern.",
  },
  {
    id: getRandomUUID(),
    type: "ai",
    message:
      "Good call — subtle animations make a huge difference. You can use **Framer Motion**, which integrates beautifully with React. It’s declarative, smooth, and works well with Tailwind. Try adding simple transitions like fade-ins or scale effects when components mount or update — it’ll make your UI feel polished.",
  },
  {
    id: getRandomUUID(),
    type: "user",
    message: "That sounds cool. Should I learn TypeScript now or later?",
  },
  {
    id: getRandomUUID(),
    type: "ai",
    message:
      "If you’re already comfortable with JavaScript, now is actually a perfect time to start learning TypeScript. It prevents a ton of runtime bugs and gives better autocompletion and documentation in your editor. Start small — just add types gradually instead of converting everything at once. Over time, you’ll wonder how you ever coded without it!",
  },
];
