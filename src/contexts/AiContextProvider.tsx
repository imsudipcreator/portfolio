import React from "react"
import { AiContext } from "./AiContext"
import type { ChatType } from "@/types/chatTypes"

export const AiProvider = ({ children }: { children: React.ReactNode }) => {
    const [chats, setChats] = React.useState<ChatType[]>([])
    const createChat = (type: ChatType["type"] = "user", message: string) => {
        const new_chat: ChatType = {
            id: window.crypto.randomUUID(),
            message,
            type
        }
        setChats(prev => [...prev, new_chat])
    }
    return (
        <AiContext.Provider value={{ createChat, chats, setChats }}>
            {children}
        </AiContext.Provider>
    )
}