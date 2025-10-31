import type { CliEntryType } from "@/types/cli-types"
import { CliContext } from "./CliContext"
import { useState } from "react"

export const CliProvider = ({ children }: { children: React.ReactNode }) => {
    const [cliEntries, setCliEntries] = useState<CliEntryType[]>([])
    return (
        <CliContext.Provider value={{ cliEntries, setCliEntries }}>{children}</CliContext.Provider>
    )
}