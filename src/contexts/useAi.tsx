import { useContext } from "react"
import { AiContext } from "./AiContext"

export const useAi = () => {
    const context = useContext(AiContext)
    if (!context) throw new Error("useAi must be used within AiProvider")
    return context
}