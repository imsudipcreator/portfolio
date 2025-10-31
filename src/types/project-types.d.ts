import { IconType } from "react-icons";

export type ProjectType = {
  title: string;
  desc: string;
  image: string | null;
  type: "website" | "app" | "api" | "terminal";
  tags: string[];
  links: {
    url: string;
    icon: IconType;
    alias: string;
  }[];
};
