import type React from "react";

export type CliEntryType = {
  command: string;
  output: React.JSX.Element | string;
};

export type CommandType = {
  name: string;
  description: string;
  commands: string[];
  output: React.JSX.Element | string;
  action?: () => void;
};
