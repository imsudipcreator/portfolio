import profileImg from '../assets/profile.jpg'
import html from "devicon/icons/html5/html5-original.svg"
import css from "devicon/icons/css3/css3-original.svg"
import js from "devicon/icons/javascript/javascript-original.svg"
import java from "devicon/icons/java/java-original.svg"
import python from "devicon/icons/python/python-original.svg"
import c from "devicon/icons/c/c-original.svg"
import cpp from "devicon/icons/cplusplus/cplusplus-original.svg"
import rust from "devicon/icons/rust/rust-original.svg"
import react from "devicon/icons/react/react-original.svg"
import nextjs from "devicon/icons/nextjs/nextjs-original.svg"
import mysql from "devicon/icons/mysql/mysql-original.svg"
import tailwindcss from "devicon/icons/tailwindcss/tailwindcss-original.svg"
import prisma from "devicon/icons/prisma/prisma-original.svg"
import postgresql from "devicon/icons/postgresql/postgresql-original.svg"
import nodejs from "devicon/icons/nodejs/nodejs-original.svg"
import mongodb from "devicon/icons/mongodb/mongodb-original.svg"
import linux from "devicon/icons/linux/linux-original.svg"
import docker from "devicon/icons/docker/docker-original.svg"
import jupyter from "devicon/icons/jupyter/jupyter-original.svg"
import git from "devicon/icons/git/git-original.svg"
import github from "devicon/icons/github/github-original.svg"
import fastapi from "devicon/icons/fastapi/fastapi-original.svg"
import expo from "devicon/icons/expo/expo-original.svg"
import numpy from "devicon/icons/numpy/numpy-original.svg"
import supabase from "devicon/icons/supabase/supabase-original.svg"
import electron from "devicon/icons/electron/electron-original.svg"
import vscode from "devicon/icons/vscode/vscode-original.svg"
import figma from "devicon/icons/figma/figma-original.svg"
import framermotion from "devicon/icons/framermotion/framermotion-original.svg"
import trpc from "devicon/icons/trpc/trpc-original.svg"
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import React, { useEffect } from 'react'
import { LuInfo, LuSparkles, LuX } from 'react-icons/lu'
import { Link } from 'react-router'
import { AnimatePresence, motion } from "motion/react"


const skills = [html, css, js, java, python, c, cpp, rust, react, nextjs, mysql, tailwindcss, prisma, postgresql, nodejs, mongodb, linux, docker, jupyter, git, github, fastapi, expo, numpy, supabase, electron, vscode, figma, framermotion, trpc]

const Home = () => {
    const [selectedText, setSelectedText] = React.useState<string>('');
    const selectableTextRef = React.useRef<HTMLParagraphElement>(null)
    const [showAttachment, setShowAttachment] = React.useState<boolean>(false)
    const overlayDivRef = React.useRef<HTMLDivElement>(null)
    const aiResponseOnText = () => {
        const formattedText = `"${selectedText}"--- What does this snippet mean in your portfolio?`
        window.open(`/chat?query=${encodeURIComponent(formattedText)}`, '_blank')
    }


    useEffect(() => {
        const overlayDiv = overlayDivRef.current;
        const selectableText = selectableTextRef.current;
        if (!overlayDiv || !selectableText) return

        function showOverlay() {
            if (!overlayDiv || !selectableText) return
            const selection = window.getSelection();
            if (selection && selection.toString().trim().length > 0) {
                // check if the selection is inside the selectable text
                if (!selectableText.contains(selection.anchorNode as Node)) return

                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                console.log(range)
                const safeRange = window.innerWidth < 500 ? 56 : 18

                overlayDiv.style.left = rect.left + "px";
                overlayDiv.style.top = rect.top - overlayDiv.offsetHeight - safeRange + "px";

                overlayDiv.style.display = "block";
                setSelectedText(selection.toString());
            } else {
                overlayDiv.style.display = "none";
                setSelectedText("");
            }
        }
        document.addEventListener("selectionchange", showOverlay);

        return () => {
            document.removeEventListener("selectionchange", showOverlay);
        };
    }, []);

    return (
        <div id='home' className='w-full h-dvh relative flex items-start justify-center overflow-y-auto py-8'>
            <div className='w-full max-w-[50rem] flex flex-col gap-24 md:my-24 my-16 not-md:px-6 pb-40 '>
                {/** Overlay Div */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", bounce: 0.3 }
                    }}
                    style={{ display: "none" }}
                    ref={overlayDivRef}
                    onClick={aiResponseOnText}
                    className='fixed flex min-w-16 rounded-2xl min-h-8 bg-white border text-violet-800 border-violet-400 shadow-xl z-50 px-4 py-2 items-center cursor-pointer active:bg-violet-500 active:text-white hover:bg-violet-500 hover:text-white'
                >
                    <p className='flex items-center gap-2 font-medium '>
                        Ask Twin
                        <LuSparkles className='size-4  ' />
                    </p>
                </motion.div>


                <section id='top' className="w-full flex items-start justify-between gap-6">
                    <div className="flex flex-col gap-2 flex-1">
                        <Link to={{ pathname: "/chat", search: "?query='Hi, tell me more about you?'" }} className="relative inline-block md:hidden w-fit p-1 rounded-full border-[2px] border-violet-400">
                            <motion.img
                                viewport={{ once: true }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: { type: "spring", bounce: 0.4 }
                                }}
                                src={profileImg}
                                alt=""
                                className="size-28 rounded-full overflow-clip"
                            />
                            <div className=" rounded-full bg-violet-400 absolute bottom-0 right-0 p-2">
                                <LuSparkles className='size-5 text-white' />
                            </div>
                        </Link>
                        <motion.h1
                            viewport={{ once: true }}
                            initial={{
                                opacity: 0,
                                translateX: -40,
                            }}
                            animate={{
                                translateX: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.4,
                                duration: 0.4,
                                translateX: { type: "spring", bounce: 0.4 }
                            }}
                            className="md:text-5xl text-4xl font-medium"
                        >
                            Hi, I'm {" "}
                            <span
                                className='text-tangerine font-bold md:text-7xl text-6xl text-violet-500'
                            >Sudip
                            </span>
                        </motion.h1>
                        <motion.h2
                            viewport={{ once: true }}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.8,
                                duration: 0.4
                            }}
                            className='md:text-2xl text-xl text-gray-800'
                        >
                            Full-stack developer in the making, passionate about building impactful apps, websites, and AI-powered solutions.
                        </motion.h2>
                    </div>
                    <Link to={{ pathname: "/chat", search: "?query='Hi, tell me more about you?'" }} className='relative not-md:hidden rounded-full inline-block w-fit border-[2px] border-violet-400 p-1'>
                        <motion.img
                            viewport={{ once: true }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", bounce: 0.4 }
                            }}
                            src={profileImg}
                            alt=""
                            className='size-36 rounded-full overflow-clip'
                        />
                        <div className=" rounded-full bg-violet-400 absolute bottom-1 right-1 p-2">
                            <LuSparkles className='size-5 text-white' />
                        </div>
                    </Link>
                </section>


                <section className='flex flex-col gap-4'>
                    <motion.h1
                        viewport={{ once: true }}
                        initial={{
                            translateY: 40,
                            opacity: 0,
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.4
                        }}
                        className='md:text-3xl text-2xl font-medium text-mozilla'>
                        Let's get to know me {" "}
                        <sup onClick={() => setShowAttachment(prev => !prev)} className='inline-block'>
                            <LuInfo size={16} className='text-violet-500' />
                        </sup>
                    </motion.h1>
                    <AnimatePresence>
                        {
                            showAttachment && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.4
                                    }}
                                    className='fixed top-0 left-0 text-sm bg-black/40 backdrop-blur-lg w-screen h-screen z-[100] flex items-center justify-center'>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0,
                                        }}
                                        transition={{
                                            delay: 0.1,
                                            duration: 0.4,
                                            scale: { type: "spring", bounce: 0.2 },
                                            opacity: { duration: 0.1 }
                                        }}
                                        className='w-[80%] md:w-[30%] min-h-24 rounded-lg bg-white p-5 space-y-2.5 relative'>
                                        <h1 className='font-semibold text-2xl'>
                                            Attachment
                                        </h1>
                                        <p className=''>
                                            You can highlight any part of this paragraph to instantly generate an AI overview based on the selected content.
                                            The AI will analyze only what you’ve selected and provide a quick summary or insight right where you are.
                                        </p>
                                        <span onClick={() => setShowAttachment(prev => !prev)} className='absolute top-5 right-5'>
                                            <LuX size={26} />
                                        </span>
                                    </motion.div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                    <motion.p
                        viewport={{ once: true }}
                        initial={{
                            translateY: 40,
                            opacity: 0,
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.2,
                            duration: 0.4
                        }}
                        onContextMenu={(e) => {
                            e.preventDefault();
                        }}
                        ref={selectableTextRef} className='md:text-base text-gray-500 selection:bg-violet-600 selection:text-white'>
                        I’m Sudip Mahata(@imsudipdev), a 18 year old self taught software engineer and full-stack developer, driven by a passion for creating apps, websites, and intelligent systems that make a real difference. As a freelancer and ROM tester, I’ve gained hands-on experience in solving technical challenges, optimizing user experiences, and experimenting with new technologies.
                        Currently, I’m sharpening my skills in JavaScript, Python, and Rust, while also exploring areas like AI integration, operating systems, and cross-platform app development. I enjoy turning ideas into functional solutions — from social platforms and browsers to code editors and community tools.
                        Beyond building projects, I aim to grow as a problem solver and technical lead, continuously pushing myself to learn, innovate, and deliver impactful solutions.
                    </motion.p>
                </section>


                <section className='flex flex-col gap-4 w-full'>
                    <motion.h1
                        viewport={{ once: true }}
                        initial={{
                            translateY: 40,
                            opacity: 0,
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.4
                        }}
                        className='md:text-3xl text-2xl font-medium text-mozilla'>Top tech skills of me</motion.h1>
                    <div className='flex flex-wrap gap-5'>
                        {
                            skills.map((skill, index) => (
                                <motion.img
                                    initial={{
                                        opacity: 0,
                                        scale: 0
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1
                                    }}
                                    viewport={{ once: true }}
                                    key={skill}
                                    src={skill}
                                    alt=""
                                    className='md:size-14 size-10 select-none' />
                            ))
                        }
                    </div>
                </section>

                <section className='flex flex-col gap-4 w-full'>
                    <motion.h1
                        viewport={{ once: true }}
                        initial={{
                            translateY: 40,
                            opacity: 0
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.4
                        }}
                        className='md:text-3xl text-2xl font-medium text-mozilla'
                    >
                        My latest projects
                    </motion.h1>
                    <div className='md:columns-2 columns-1 gap-4 space-y-4'>
                        {
                            projects.map(project => (
                                <ProjectCard key={project.title} {...project} />
                            ))
                        }
                    </div>
                </section>

                <section id="connect" className='flex flex-col gap-4 w-full'>
                    <h1 className='md:text-3xl text-2xl font-medium text-mozilla'>Get in touch</h1>
                    <p>Contact me at <a href="mailto:imsudipmahata@gmail.com" className='text-[#007AFF] decoration-dotted underline underline-offset-8'>imsudipmahata@gmail.com</a> or <a href="https://x.com/imsudipdev" className='text-[#007AFF] decoration-dotted underline underline-offset-8'>with a direct question on X (formerly twitter)</a></p>
                </section>

                <div className="w-full h-36 fixed bottom-0 bg-gradient-to-b from-transparent to-white">

                </div>


            </div>
        </div>
    )
}

export default Home