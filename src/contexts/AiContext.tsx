import type { ChatType, ReferenceType } from "@/types/chatTypes";
import React from "react";

export interface AiContextType {
    chats: ChatType[];
    setChats: React.Dispatch<React.SetStateAction<ChatType[]>>;
    createChat: (type: ChatType["type"], message: string, references?: ReferenceType[]) => void;
    getAiResponse: (query: string) => Promise<{ content: string; references?: ReferenceType[] }>;
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const AiContext = React.createContext<AiContextType | null>(null)