import type { CliEntryType } from "@/types/cliTypes";
import { createContext } from "react";

export interface CliContextType {
    cliEntries: CliEntryType[];
    setCliEntries: React.Dispatch<React.SetStateAction<CliEntryType[]>>
}

export const CliContext = createContext<CliContextType | null>(null)