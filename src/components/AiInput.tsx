/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { LuArrowUp } from 'react-icons/lu'
import { useAi } from '@/contexts/useAi'
import { ChatGroq } from "@langchain/groq";
import { SystemMessage, HumanMessage, AIMessage, ToolMessage, type MessageStructure } from "@langchain/core/messages"
import { tool } from "@langchain/core/tools";
import selfInfoData from "../../public/selfinfo.md?raw"
import { z } from 'zod';


const model = new ChatGroq({
    model: "openai/gpt-oss-20b",
    temperature: 0.6,
    apiKey: import.meta.env.VITE_PUBLIC_GROQ_API_KEY
});


const AiInput = () => {
    const [input, setInput] = useState("")
    const { createChat, chats } = useAi()

    const selfInfo = tool(
        async () => selfInfoData,
        {
            name: "self-info",
            description: "Gather detailed info about me",
            schema: z.object({}) // no args allowed
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
        const toolsByName: Record<string, typeof selfInfo> = {
            "self-info": selfInfo
        };

        // tool calling
        const llmWithTools = model.bindTools(tools)
        const aiMessage = await llmWithTools.invoke(messages);


        if (aiMessage.tool_calls) {
            for (const toolCall of aiMessage.tool_calls) {
                const selectedTool = toolsByName[toolCall.name];
                const toolMessage = await selectedTool.invoke(toolCall);
                messages.push(toolMessage);
            }
            const response = await llmWithTools.invoke(messages)
            createChat("ai", String(response.content))
        } else {
            const response = await model.invoke(messages)
            createChat("ai", String(response.content))
        }

        console.log(messages);

    }

    useEffect(() => {
        document.getElementById("aiInput")?.focus()
    }, [])

    return (
        <footer className='absolute bottom-0 mx-auto z-50 md:w-[51rem] w-full not-md:px-6 min-h-20 bg-white flex flex-col items-center rounded-t-4xl'>
            <div className='w-full h-14 bg-gradient-to-t from-white to-transparent -translate-y-10 absolute' />
            <form onSubmit={handleSubmit} className='w-full flex items-center rounded-3xl border-black/30 border bg-white h-12 p-1 z-50'>
                <input type='text' id="aiInput" value={input} onChange={(e) => setInput(e.target.value)} className='flex-1 h-full rounded-full px-4 outline-none border-none' placeholder='Ask something to my twin...' />
                <Button type='submit' disabled={input.trim() === ""} className='h-full aspect-square rounded-full bg-black/90 p-0 cursor-pointer'>
                    <LuArrowUp className='size-6' />
                </Button>
            </form>
            <p className='text-xs py-1'>You can find the advanced version of it on our <a className='text-blue-600 underline underline-offset-2' href="https://imagollc.vercel.app/" target='_blank'>imago</a> website</p>
        </footer>
    )
}

export default AiInput