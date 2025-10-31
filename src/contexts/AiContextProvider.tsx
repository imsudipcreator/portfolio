/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { AiContext } from "./AiContext"
import type { ChatType, ReferenceType } from "@/types/chat-types"
import { SystemMessage, AIMessage, HumanMessage, type MessageStructure, type ToolMessage } from "@langchain/core/messages"
import { LuGithub, LuLinkedin, LuMonitor, LuTwitter, LuUser } from 'react-icons/lu'
import { ChatGroq } from "@langchain/groq"
import { tool } from "@langchain/core/tools"
import selfInfoData from "@/data/selfinfo.md?raw"
import z from "zod"
import { getRandomUUID } from "@/utils/get-random-uuid"



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


export const AiProvider = ({ children }: { children: React.ReactNode }) => {
    const [chats, setChats] = React.useState<ChatType[]>([])
    const [loading, setLoading] = React.useState(false)
    const createChat = (type: ChatType["type"] = "user", message: string, references?: ChatType["references"]) => {
        const new_chat: ChatType = {
            id: getRandomUUID(),
            message,
            type,
            references
        }
        setChats(prev => [...prev, new_chat])
    }

    const getAiResponse = async (query: string): Promise<{ content: string; references?: ReferenceType[] }> => {
        setLoading(true)
        // prepare the model
        const model = new ChatGroq({
            model: "openai/gpt-oss-20b",
            temperature: 0.6,
            apiKey: import.meta.env.VITE_PUBLIC_GROQ_API_KEY
        });

        // prepare the system prompt
        const systemMessage = `You are a helpful ai twin of a self taught developer and a x (twitter) content creator, Sudip Mahata. 
        Your job is just to help the user get more information about him. They will be chatting with you in his portfolio AI website chat window. 
        Use relevant emoji's in between to make the conversation more humanly. 
        Don't deviate too much from your job, your job is just to give the user information about Sudip.
        `
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


        const selfInfo = tool(
            async () => selfInfoData,
            {
                name: "self-info",
                description: "Gather detailed info about me",
                schema: z.object({})
            }
        )



        // gather tools in an array
        const tools = [selfInfo]
        const toolsByName: Record<string, any> = {
            "self-info": selfInfo
        };


        // tool calling
        const llmWithTools = model.bindTools(tools)
        const aiMessage = await llmWithTools.invoke(messages);
        // console.log("aiMessage", aiMessage)


        try {
            if (aiMessage.tool_calls && aiMessage.tool_calls.length > 0) {
                for (const toolCall of aiMessage.tool_calls) {
                    const selectedTool = toolsByName[toolCall.name];
                    const toolMessage = await selectedTool.invoke(toolCall);
                    messages.push(toolMessage);
                }
                const response = await llmWithTools.invoke(messages)
                // console.log("response", response)

                // add references manually by checking the response for relevant links
                const references: ReferenceType[] = []

                // iterate through the default and constant references and add them to the references array
                for (const def_ref of default_references) {
                    if (String(response.content).toLowerCase().includes(def_ref.title.toLowerCase())) {
                        references.push(def_ref)
                    }
                }


                // return content and references

                return {
                    content: String(response.content),
                    references
                }

            }

            // returning the response without references
            const response = await model.invoke(messages)

            return {
                content: String(response.content)
            }

        } catch (error) {
            console.log("error", error)
            return {
                content: "Something went wrong, please try again later."
            }
        } finally {
            setLoading(false)
        }


    }

    return (
        <AiContext.Provider value={{ createChat, chats, setChats, getAiResponse, loading, setLoading }}>
            {children}
        </AiContext.Provider>
    )
}