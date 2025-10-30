import { commandList } from '@/data/command-list';
import type { CliEntryType } from '@/types/cliTypes';
import React, { useEffect, useRef, useState } from 'react';
import { useAsciiText, graffiti } from 'react-ascii-text';

// const demoCliEntries: CliEntryType[] = [
//     {
//         command: "ls",
//         output: "README.md",
//     },
//     {
//         command: "pwd",
//         output: "/home/imsudip/dev",
//     },
//     {
//         command: "git status",
//         output: "On branch main\nnothing to commit, working tree clean",
//     },
//     {
//         command: "npm run dev",
//         output: "Starting the development server...\nLocal: http://localhost:5173/",
//     },
//     {
//         command: "cat README.md",
//         output: "# My Dev CLI\nThis is a demo terminal built with React.",
//     },
//     {
//         command: "echo $USER",
//         output: "imsudip",
//     },
//     {
//         command: "mkdir projects",
//         output: "",
//     },
//     {
//         command: "cd projects",
//         output: "",
//     },
//     {
//         command: "touch index.js",
//         output: "",
//     },
//     {
//         command: "node -v",
//         output: "v20.12.1",
//     },
//     {
//         command: "git log --oneline -3",
//         output:
//             "b2c91e1  update terminal ui\n1fa2d7c  add cli history demo\n7a0c1ef  initial commit",
//     },
//     {
//         command: "clear",
//         output: "",
//     },
// ];

const Terminal = () => {
    const [cliEntries, setCliEntries] = useState<CliEntryType[]>([])
    const scrollDivRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [command, setCommand] = useState("")
    const asciiTextRef = useAsciiText({
        font: graffiti,
        text: window.innerWidth < 500 ? "IMSUDIP\nCLI" : "IMSUDIP    CLI",
        isAnimated: false
    });

    const createEntry = () => {
        const foundCommand = commandList.find(c => c.commands.includes(command))
        const output = foundCommand?.output ?? "Command not found"
        setCommand("")
        setCliEntries([...cliEntries, { command, output }])
    }

    useEffect(() => {
        const input = inputRef.current
        if (!input) return
        input.focus()
    }, [])


    useEffect(() => {
        const scrollDiv = scrollDivRef.current
        if (!scrollDiv) return
        console.log(scrollDiv.scrollHeight)
        setTimeout(() => scrollDiv.scrollTo(0, scrollDiv.scrollHeight), 300)
    }, [cliEntries]);

    return (
        <div style={{ backgroundColor: '#120a12' }} className='w-screen h-dvh overflow-y-clip relative  flex items-center justify-center text-white gap-2'>
            {/** Scrollable Div */}
            <div id='scrollDiv' ref={scrollDivRef} className='w-full h-full overflow-y-auto flex flex-col items-center justify-start pt-16 pb-44'>
                <div className='max-w-[51rem] not-md:px-6 w-full flex flex-col'>
                    <pre ref={asciiTextRef as React.Ref<HTMLPreElement>} style={{ fontFamily: "monospace", fontSize: window.innerWidth < 500 ? "0.6rem" : "0.9rem" }} />
                    <p className='text-inconsolata text-xl mt-3'>Welcome to imsudipdev cli! 👋</p>
                    <p className='text-inconsolata text-xl'>Type "help" or "?" to see available commands.</p>

                    <div className='w-full flex flex-col gap-6 text-inconsolata mt-14'>
                        {
                            cliEntries.map(entry => (
                                <div className='w-full flex flex-col gap-2 text-xl '>
                                    <div className='flex items-center justify-start gap-3'>
                                        {/** Command Prompt */}
                                        <h1 className='text-inconsolata text-violet-500'>imsudip@dev:~<span className='text-green-500'>$</span></h1>
                                        <h1 className='text-inconsolata'>{entry.command}</h1>
                                    </div>
                                    <p className='text-inconsolata'>
                                        {entry.output}
                                    </p>
                                </div>
                            ))
                        }

                        <div className='w-full flex flex-col gap-2 text-xl '>
                            <form onSubmit={(e) => { e.preventDefault(); createEntry() }} className='flex items-center justify-start gap-3'>
                                {/** Command Prompt */}
                                <h1 className='text-inconsolata text-violet-500 text-shadow-[0_0_0.8em_rgb(204_77_255)]'>imsudip@dev:~<span className='text-green-500 text-shadow-[0_0_0.8em_rgb(24_245_69)]'>$</span></h1>
                                {/* <h1 className='text-inconsolata'>{entry.command}</h1> */}
                                <input ref={inputRef} type="text" value={command} onChange={(e) => setCommand(e.target.value)} className='w-full outline-none bg-transparent text-inconsolata caret-violet-500 caret-' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terminal