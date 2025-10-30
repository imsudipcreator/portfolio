

export const Help = () => {
    if (window.innerWidth < 500) {
        return (
            <div className=' text-xl'>
                <pre className='text-inconsolata'>
                    {`
Available Commands:

version, v  
help, h, ?  
about, whoami       
skills, s           
projects, p, ls     
edu, e              
social, links       
contact, mail       
date, time     
                    `}
                </pre>
            </div>
        )
    }
    return (
        <div className=' text-xl'>
            <pre className='text-inconsolata whitespace-pre-wrap'>
                {`
Available Commands:

version, v          Display current version
help, h, ?          Show all available commands
about, whoami       Display info about the developer
skills, s           List technical skills
projects, p, ls     Show recent or featured projects
edu, e              Display education background
social, links       Show social media links
contact, mail       Display contact options
date, time          Show current system date and time
                `}
            </pre>
        </div>
    )
}


export const Version = () => {
    return (
        <div className=' text-xl'>
            <pre className='text-inconsolata'>
                {`
IMSUDIP CLI v0.0.1
                `}
            </pre>
        </div>
    )
}

export const About = () => {
    return (
        <div className=' text-xl'>
            <p className='text-inconsolata'>
                {`
I’m Sudip Mahata(@imsudipdev), a 18 year old self taught software engineer and full-stack developer, driven by a passion for creating apps, websites, and intelligent systems that make a real difference. As a freelancer and ROM tester, I’ve gained hands-on experience in solving technical challenges, optimizing user experiences, and experimenting with new technologies.
Currently, I’m sharpening my skills in JavaScript, Python, and Rust, while also exploring areas like AI integration, operating systems, and cross-platform app development. I enjoy turning ideas into functional solutions — from social platforms and browsers to code editors and community tools.
Beyond building projects, I aim to grow as a problem solver and technical lead, continuously pushing myself to learn, innovate, and deliver impactful solutions.
                `}
            </p>
        </div>
    )
}

export const Skills = () => {
    return (
        <div className=' text-xl'>
            <pre className='text-inconsolata'>
                {`
- JavaScript (ES6+)
- Python
- Rust
- HTML
- CSS
- SQL
- Git
- GitHub
- Linux
- Windows
- MacOS
                `}
            </pre>
        </div>
    )
}


type Project = {
    icon: string;
    name: string;
    description: string;
    link: string;
};

const projects: Project[] = [
    {
        icon: "🖼️",
        name: "T3Gallery",
        description:
            "A clean, minimal image gallery built using the T3 stack (Next.js, Prisma, Tailwind, and tRPC). It’s fast, aesthetic, and fully open source.",
        link: "https://github.com/imsudipcreator/t3gallery",
    },
    {
        icon: "🌐",
        name: "Portfolio — imsudip.is-a.dev",
        description:
            "My personal portfolio website, built to be ultra-lightweight, showcasing my projects, learning journey, and thoughts. Built with Next.js and TailwindCSS.",
        link: "https://imsudip.is-a.dev/",
    },
    {
        icon: "🧩",
        name: "Imago LLC (Parent Brand)",
        description:
            "An initiative exploring decentralized, privacy-friendly apps. Experimenting with Web3 tools, blockchain integrations, and minimal user-first designs.",
        link: "https://imagollc.vercel.app/",
    },
    {
        icon: "📝",
        name: "NoteMark",
        description:
            "A modern, elegant Markdown note-taking app built with Electron + React + TypeScript. Designed for devs, writers, and students who want a clean, distraction-free writing environment.",
        link: "https://github.com/imsudipcreator/Notemark/releases",
    },
    {
        icon: "💡",
        name: "Tool User AI",
        description:
            "A free, open source tool API powered by LLMs and LangChain. It can search the web, generate images, fetch data, and process user queries intelligently.",
        link: "https://github.com/imsudipcreator/tool-user-ai",
    },
    {
        icon: "🔗",
        name: "LinkUp",
        description:
            "A social media platform for GenZ — built for fast interactions and community-driven engagement.",
        link: "https://github.com/imsudipcreator/LinkUp",
    },
];

export const Projects = () => {
    return (
        <div className="text-lg">
            <p className="mb-4 text-inconsolata">Projects:</p>
            <div className="flex flex-col gap-6">
                {projects.map((proj) => (
                    <div key={proj.name} className="flex flex-col gap-1">
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline text-inconsolata"
                        >
                            {proj.icon}{" "}
                            <span className="font-semibold text-inconsolata">{proj.name}</span>
                        </a>
                        <p className="text-neutral-300 text-inconsolata">{proj.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};



export const Education = () => {
    return (
        <div className="text-xl">
            <p className="text-inconsolata whitespace-pre-line">
                {`
Education:
- Self-taught Software Engineer (since 2020)
- Completed Senior Secondary Education in Science stream
- Focused on Computer Science, Mathematics, and Physics
- Ongoing exploration of systems programming (Rust) and AI integration
`}
            </p>
        </div>
    );
};

type SocialLink = {
    name: string;
    url: string;
    icon: string;
};

const socialLinks: SocialLink[] = [
    { icon: "💻", name: "GitHub", url: "https://github.com/imsudipdev" },
    { icon: "🐦", name: "Twitter", url: "https://x.com/imsudipdev" },
    { icon: "💼", name: "LinkedIn", url: "https://linkedin.com/in/imsudipdev" },
    { icon: "📺", name: "YouTube", url: "https://youtube.com/@imsudipdev" },
    { icon: "✉️", name: "Email", url: "mailto:imsudipdev@gmail.com" },
];

export const Social = () => {
    return (
        <div className="text-xl">
            <p className="mb-4 text-inconsolata">Social Links:</p>
            <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                        <p>
                            {link.icon}{" "}
                            <span className="font-semibold text-white text-inconsolata">{link.name}</span>
                        </p>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline text-lg text-inconsolata"
                        >
                            {link.url}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};



type ContactInfo = {
    label: string;
    value: string;
    url?: string;
    icon: string;
};

const contactInfo: ContactInfo[] = [
    {
        icon: "✉️",
        label: "Email",
        value: "imsudipmahata@gmail.com",
        url: "mailto:imsudipmahata@gmail.com",
    },
    {
        icon: "🌐",
        label: "Portfolio",
        value: "https://imsudip.is-a..dev",
        url: "https://imsudip.is-a.dev",
    },
    {
        icon: "💻",
        label: "GitHub",
        value: "https://github.com/imsudipdev",
        url: "https://github.com/imsudipdev",
    },
];

export const Contact = () => {
    return (
        <div className="text-xl ">
            <p className="mb-4 text-inconsolata">Contact Info:</p>
            <div className="flex flex-col gap-3">
                {contactInfo.map((item) => (
                    <div key={item.label} className="flex flex-col">
                        <p>
                            {item.icon}{" "}
                            <span className="font-semibold text-white text-inconsolata">{item.label}</span>
                        </p>
                        {item.url ? (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:underline text-inconsolata"
                            >
                                {item.value}
                            </a>
                        ) : (
                            <p className="text-green-400 text-lg">{item.value}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


export const DateTime = () => {
    const now = new Date().toLocaleString();
    return (
        <div className="text-xl">
            <pre className="text-inconsolata">
                {`
Current System Date & Time:
${now}
`}
            </pre>
        </div>
    );
};


