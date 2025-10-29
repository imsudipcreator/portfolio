/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { LuArrowUp, LuChevronsUpDown, LuEraser, LuGithub, LuHouse, LuLinkedin, LuMonitor, LuTwitter, LuUser } from 'react-icons/lu'
import { useAi } from '@/contexts/useAi'
import { ChatGroq } from "@langchain/groq";
import { SystemMessage, HumanMessage, AIMessage, ToolMessage, type MessageStructure } from "@langchain/core/messages"
import { tool } from "@langchain/core/tools";
import selfInfoData from "@/data/selfinfo.md?raw"
import { z } from 'zod';
import type { ReferenceType } from '@/types/chatTypes';
import type { IconType } from 'react-icons';



const default_references: ReferenceType[] = [
    {
        icon: LuTwitter,
        title: "Twitter",
        url: "https://x.com/imsudipdev"
    },
    {
        icon: LuGithub,
        title: "GitHub",
        url: "https://github.com/imsudipcreator"
    },
    {
        icon: LuUser,
        title: "Portfolio",
        url: "https://imsudip.is-a.dev/"
    },
    {
        icon: LuLinkedin,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/imsudipcreator/"
    },
    {
        icon: LuMonitor,
        title: "Imago Llc",
        url: "https://imagollc.vercel.app/"
    }
]


const model = new ChatGroq({
    model: "openai/gpt-oss-20b",
    temperature: 0.6,
    apiKey: import.meta.env.VITE_PUBLIC_GROQ_API_KEY
});

// const responseFormatter = z.object({
//     content: z.string().describe("Response content"),
//     references: z.array(z.object({
//         title: z.string().describe("The title of the link"),
//         url: z.string().describe("The url of the link"),
//     })).describe("References of the all the links you will respond with title and url").optional()
// })


const AiInput = () => {
    const [input, setInput] = useState("")
    const { createChat, chats, setChats } = useAi()
    const [openedMenu, setOpenedMenu] = useState(false)

    const clearChat = () => setChats([])


    const menuOptions: { icon: IconType, title: string, onClick: () => void }[] = [
        {
            icon: LuHouse,
            title: "Home",
            onClick: () => window.location.href = "/"
        },
        {
            icon: LuEraser,
            title: "Clear Chat",
            onClick: clearChat
        }
    ]

    const selfInfo = tool(
        async () => selfInfoData,
        {
            name: "self-info",
            description: "Gather detailed info about me",
            schema: z.object({})
        }
    )

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault()
        const query = input.trim()
        const systemMessage = `You are a helpful ai twin of a self taught developer and a x (twitter) content creator, Sudip Mahata. 
        Your job is just to help the user get more information about him. They will be chatting with you in his portfolio AI website chat window. 
        Use relevant emoji's in between to make the conversation more humanly. 
        Don't deviate too much from your job, your job is just to give the user information about Sudip.
        `
        // create a chat and clear the input
        createChat("user", query)
        setInput("")

        // get the last 6 chats
        const slicedChats = chats.slice(-6)
        // structure the messages data
        const messages: (SystemMessage<MessageStructure> | AIMessage<MessageStructure> | HumanMessage<MessageStructure> | ToolMessage<MessageStructure>)[] = [
            new SystemMessage(systemMessage),
            ...slicedChats.map(chat => {
                if (chat.type == 'ai') {
                    return new AIMessage(chat.message)
                } else {
                    return new HumanMessage(chat.message)
                }
            }),
            new HumanMessage(query),
        ];

        // gather tools in an array
        const tools = [selfInfo]
        const toolsByName: Record<string, any> = {
            "self-info": selfInfo
        };

        // tool calling
        const llmWithTools = model.bindTools(tools)
        const aiMessage = await llmWithTools.invoke(messages);
        console.log("aiMessage", aiMessage)


        if (aiMessage.tool_calls && aiMessage.tool_calls.length > 0) {
            for (const toolCall of aiMessage.tool_calls) {
                const selectedTool = toolsByName[toolCall.name];
                const toolMessage = await selectedTool.invoke(toolCall);
                messages.push(toolMessage);
            }
            const response = await llmWithTools.invoke(messages)
            console.log("response", response)

            // add references manually by checking the response for relevant links
            const references: ReferenceType[] = []

            // iterate through the default and constant references and add them to the references array
            for (const def_ref of default_references) {
                if (String(response.content).toLowerCase().includes(def_ref.title.toLowerCase())) {
                    references.push(def_ref)
                }
            }

            // create chat with references
            createChat("ai", String(response.content), references)
        } else {
            // fallback to normal model if no tools are called
            const response = await model.invoke(messages)
            createChat("ai", String(response.content))
        }

        console.log(messages);

    }

    useEffect(() => {
        document.getElementById("aiInput")?.focus()
    }, [])

    return (
        <footer className='absolute bottom-0 mx-auto z-50 md:w-[51rem] w-full not-md:px-6 min-h-20 bg-white flex flex-col items-center rounded-t-3xl'>
            <div className='w-full h-14 bg-gradient-to-t from-white to-transparent -translate-y-10 absolute' />
            <div className='flex w-full items-center h-12 gap-1'>
                <div className='h-full z-50 border border-black/30 aspect-square rounded-full p-0 bg-transparent  transition-colors duration-300 relative'>
                    <Button type='button' className='w-full h-full rounded-full p-0 bg-transparent hover:bg-black/20'>
                        <LuChevronsUpDown onClick={() => setOpenedMenu(prev => !prev)} className='size-6 text-black' />
                    </Button>
                    {
                        openedMenu && (
                            <div className='absolute min-h-16 min-w-16 rounded-xl z-[100] bg-white shadow-xl border border-black/10 left-0 -top-24 flex flex-col items-center gap-2 p-1 justify-around'>
                                {
                                    menuOptions.map(option => (
                                        <button onClick={() => { option.onClick(); setOpenedMenu(false) }} key={option.title} className='w-full flex items-center gap-1 cursor-pointer hover:bg-black/20 rounded-lg py-1.5 px-2 text-black'>
                                            {option.icon && <option.icon className='size-5' />}
                                            <p className='text-sm text-nowrap font-medium'>{option.title}</p>
                                        </button>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                <form onSubmit={handleSubmit} className='flex-1 flex items-center rounded-3xl border-black/30 border bg-white h-full p-1 z-50'>
                    <input type='text' id="aiInput" value={input} onChange={(e) => setInput(e.target.value)} className='flex-1 h-full rounded-full px-4 outline-none border-none' placeholder='Ask something to my twin...' />
                    <Button type='submit' disabled={input.trim() === ""} className='h-full aspect-square rounded-full bg-black/90 p-0 cursor-pointer'>
                        <LuArrowUp className='size-6' />
                    </Button>
                </form>
            </div>
            <p className='text-xs py-1'>You can find the advanced version of it on our <a className='text-blue-600 underline underline-offset-2' href="https://imagollc.vercel.app/" target='_blank'>imago</a> website</p>
        </footer>
    )
}

export default AiInput