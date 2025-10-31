import type { CommandType } from "@/types/cli-types";
import { About, Contact, DateTime, Education, Help, Projects, Skills, Social, Version } from "@/components/Commands";

export const commandList: CommandType[] = [
    { name: "help", description: "Show all available commands", commands: ["help", "h", "?"], output: <Help /> },
    { name: "version", description: "Display current version", commands: ["version", "v"], output: <Version /> },
    { name: "about", description: "Display info about the developer", commands: ["about", "whoami"], output: <About /> },
    { name: "skills", description: "List technical skills", commands: ["skills", "s"], output: <Skills /> },
    { name: "projects", description: "Show featured projects", commands: ["projects", "p", "ls"], output: <Projects /> },
    { name: "edu", description: "Display education background", commands: ["edu", "e"], output: <Education /> },
    { name: "social", description: "Show social links", commands: ["social", "links"], output: <Social /> },
    { name: "contact", description: "Display contact info", commands: ["contact", "mail"], output: <Contact /> },
    { name: "date", description: "Show current date/time", commands: ["date", "time"], output: <DateTime /> }
];


