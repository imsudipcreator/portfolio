import type { IconType } from "react-icons";

export type ChatType = {
  id: string;
  message: string;
  type: "user" | "ai";
  references?: ReferenceType[];
};

export type ReferenceType = {
  title: string;
  url: string;
  icon?: IconType;
};
