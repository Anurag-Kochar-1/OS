export interface Window {
  id: string;
  title: string;
  type: "APP" | "PROJECT" | "GAME";
}

export interface App {
  id: string;
  title: string;
  icon: string;
  content: JSX.Element;
}
export interface ProjectGroup {
  id: string;
  title: string;
  projects: Project[];
}

export interface Project {
  title: string;
  tagline: string;
  thumbnail: string;
  images: {
    src: string;
    title: string;
    description?: string;
  }[];
  id: string;
  content: JSX.Element;
  techStack: { title: string }[];
  liveSiteUrl: string;
  sourceCodeUrl: string;
  features: string[];
}
export interface Skill {
  title: string;
  id: string;
  icon: string;
}
