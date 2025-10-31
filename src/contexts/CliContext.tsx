import type { CliEntryType } from "@/types/cli-types";
import { createContext } from "react";

export interface CliContextType {
    cliEntries: CliEntryType[];
    setCliEntries: React.Dispatch<React.SetStateAction<CliEntryType[]>>
}

export const CliContext = createContext<CliContextType | null>(null)