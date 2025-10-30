import { useContext } from "react"
import { CliContext } from "./CliContext"

export const useCli = () => {
    const context = useContext(CliContext)
    if (!context) throw new Error("useCli must be used within CliProvider")
    return context
}