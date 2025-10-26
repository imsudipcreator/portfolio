import type { ChatType } from "@/types/chatTypes";
import React from "react";

export interface AiContextType {
    chats: ChatType[],
    setChats: React.Dispatch<React.SetStateAction<ChatType[]>>
    createChat: (type: ChatType["type"], message: string) => void
}

export const AiContext = React.createContext<AiContextType | null>(null)