export type WorkData = {
  icon: string | null;
  title: string;
  description: string;
  href: string;
  images:
    | {
        image: string;
        type: "portrait" | "landscape";
      }[]
    | null;
  type: "website" | "app" | "api";
};
