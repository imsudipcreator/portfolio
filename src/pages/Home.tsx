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
import { LuSparkles } from 'react-icons/lu'
import { Link } from 'react-router'


const skills = [html, css, js, java, python, c, cpp, rust, react, nextjs, mysql, tailwindcss, prisma, postgresql, nodejs, mongodb, linux, docker, jupyter, git, github, fastapi, expo, numpy, supabase, electron, vscode, figma, framermotion, trpc]

const Home = () => {
    const [selectedText, setSelectedText] = React.useState<string>('');
    const selectableTextRef = React.useRef<HTMLDivElement>(null)
    const overlayDivRef = React.useRef<HTMLDivElement>(null)
    const aiResponseOnText = () => {
        const formattedText = `"${selectedText}"--- What does this text chunk mean in sudip's portfolio?`
        window.open(`/chat?query=${encodeURIComponent(formattedText)}`, '_blank')
    }
    useEffect(() => {
        const overlayDiv = overlayDivRef.current
        const selectableText = selectableTextRef.current
        if (!overlayDiv || !selectableText) return

        selectableText.addEventListener('mouseup', () => {
            const selection = window.getSelection();

            if (selection && selection.toString().length > 0) {
                console.log("selection: ", selection)
                const range = selection?.getRangeAt(0)
                const rect = range.getBoundingClientRect()

                overlayDiv.style.left = rect.left + window.scrollX + "px"
                overlayDiv.style.top = rect.top + window.scrollY - overlayDiv.offsetHeight - 8 + 'px'; // Position below the selection
                overlayDiv.style.display = 'block';
                setSelectedText(selection.toString());
            } else {
                overlayDiv.style.display = 'none'; // Hide if no text is selected
            }
        })

        // Optional: Hide the overlay when clicking outside
        document.addEventListener('mousedown', (e) => {
            if (overlayDiv.style.display === 'block' && !overlayDiv.contains(e.target as Node) && !selectableText.contains(e.target as Node)) {
                overlayDiv.style.display = 'none';
                setSelectedText('');
            }
        })
    }, [])
    return (
        <div className='w-full h-dvh relative flex items-start justify-center overflow-y-auto py-8'>
            <div className='w-full max-w-[50rem] flex flex-col gap-24 md:my-24 my-16 not-md:px-6 pb-40 relative '>
                {/** Overlay Div */}
                <div style={{ display: "none" }} ref={overlayDivRef} onClick={aiResponseOnText} className='absolute flex min-w-16 rounded-2xl min-h-8 bg-white border border-violet-400 shadow-xl z-50 px-4 py-2 items-center cursor-pointer hover:bg-gray-100'>
                    <p className='flex items-center gap-2 font-medium text-violet-800'>
                        Ask Twin
                        <LuSparkles className='size-4 text-violet-800 ' />
                    </p>
                </div>


                <section id='top' className="w-full flex items-start justify-between gap-6">
                    <div className="flex flex-col gap-2 flex-1">
                        <Link to={{ pathname: "/chat", search: "?query='Hi, tell me more about you?'" }} className="relative inline-block md:hidden w-fit p-1 rounded-full border-[2px] border-violet-400">
                            <img
                                src={profileImg}
                                alt=""
                                className="size-28 rounded-full overflow-clip"
                            />
                            <div className=" rounded-full bg-violet-400 absolute bottom-0 right-0 p-2">
                                <LuSparkles className='size-5 text-white' />
                            </div>
                        </Link>
                        <h1 className="md:text-5xl text-4xl font-medium">Hi, I'm <span className='text-tangerine font-bold md:text-7xl text-6xl text-violet-500'>Sudip</span></h1>
                        <h2 className='md:text-2xl text-xl text-gray-800'>Full-stack developer in the making, passionate about building impactful apps, websites, and AI-powered solutions.</h2>
                    </div>
                    <Link to={{ pathname: "/chat", search: "?query='Hi, tell me more about you?'" }} className='relative not-md:hidden rounded-full inline-block w-fit border-[2px] border-violet-400 p-1'>
                        <img src={profileImg} alt="" className='size-36 rounded-full overflow-clip' />
                        <div className=" rounded-full bg-violet-400 absolute bottom-1 right-1 p-2">
                            <LuSparkles className='size-5 text-white' />
                        </div>
                    </Link>
                </section>


                <section className='flex flex-col gap-4'>
                    <h1 className='md:text-3xl text-2xl font-medium text-mozilla'>Let's get to know me</h1>
                    <p ref={selectableTextRef} className='md:text-base text-gray-500 selection:bg-violet-600 selection:text-white'>
                        I’m Sudip Mahata(@imsudipdev), a 18 year old self taught software engineer and full-stack developer, driven by a passion for creating apps, websites, and intelligent systems that make a real difference. As a freelancer and ROM tester, I’ve gained hands-on experience in solving technical challenges, optimizing user experiences, and experimenting with new technologies.
                        Currently, I’m sharpening my skills in JavaScript, Python, and Rust, while also exploring areas like AI integration, operating systems, and cross-platform app development. I enjoy turning ideas into functional solutions — from social platforms and browsers to code editors and community tools.
                        Beyond building projects, I aim to grow as a problem solver and technical lead, continuously pushing myself to learn, innovate, and deliver impactful solutions.
                    </p>
                </section>


                <section className='flex flex-col gap-4 w-full'>
                    <h1 className='md:text-3xl text-2xl font-medium text-mozilla'>Top tech skills of me</h1>
                    <div className='flex flex-wrap gap-5'>
                        {
                            skills.map(skill => (
                                <img key={skill} src={skill} alt="" className='md:size-14 size-10' />
                            ))
                        }
                    </div>
                </section>

                <section className='flex flex-col gap-4 w-full'>
                    <h1 className='md:text-3xl text-2xl font-medium text-mozilla'>My latest projects</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
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