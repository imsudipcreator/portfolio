import { IconType } from "react-icons";
import type { DevIcons } from "./devicon-types";

export type ProjectType = {
  title: string;
  slug: ProjectSlug;
  desc: string;
  image: string | null;
  type: "website" | "app" | "api" | "terminal";
  tags: DevIcons[];
  links: {
    url: string;
    icon: IconType;
    alias: string;
  }[];
};

export type ProjectSlug =
  | "vibe"
  | "imagollc"
  | "notemark"
  | "imagoeditor"
  | "tooluserai"
  | "linkup"
  | "appaai"
  | "unitconverter"
  | "3dportfolio";
