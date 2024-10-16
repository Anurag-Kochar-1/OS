import { BlogsAppContent } from "@/components/apps/blogs";
import { GameAppContent } from "@/components/apps/game";
import { PaintAppContent } from "@/components/apps/paint";
import { ProjectsAppContent } from "@/components/apps/projects";
import { ResumeAppContent } from "@/components/apps/resume";
import { SkillsAppContent } from "@/components/apps/skills";
import { WallpapersAppContent } from "@/components/apps/wallpapers";
import { App } from "@/types";
import { Folder, Gamepad2, PaintBucket, Globe } from "lucide-react";

export const APPS: App[] = [
  // {
  //   id: "about",
  //   title: "About",
  //   icon: <Folder size={50} />,
  //   content: <AboutMeAppContent />,
  // },
  {
    id: "skills",
    title: "Skills",
    icon: <Folder size={50} />,
    content: <SkillsAppContent />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: <Folder size={50} />,
    content: <ProjectsAppContent />,
  },
  {
    id: "resume",
    title: "Resume",
    icon: <Folder size={50} />,
    content: <ResumeAppContent />,
  },
  // {
  //   id: "games",
  //   title: "Games",
  //   icon: <Folder size={50} />,
  //   content: <GamesAppContent />,
  // },
  {
    id: "blogs",
    title: "Blogs",
    icon: <Folder size={50} />,
    content: <BlogsAppContent />,
  },
  // {
  //   id: "camera",
  //   title: "Camera",
  //   icon: <Camera size={50} />,
  //   content: <CameraAppContent />,
  // },
  {
    id: "browser",
    title: "Browser",
    icon: <Globe size={50} />,
    // content: <Browser />
    content: (
      <iframe
        src={"https://www.google.com/webhp?igu=1"}
        className="h-full w-full"
        id="chrome-screen"
        title="chrome-url"
      ></iframe>
    ),
  },
  {
    id: "paint",
    title: "Paint",
    icon: <PaintBucket size={50} />,
    content: <PaintAppContent />,
  },
  {
    id: "car-game",
    title: "Game",
    icon: <Gamepad2 size={50} />,
    content: <GameAppContent />,
  },
  // {
  //   id: "studyMateral",
  //   title: "Study Materal",
  //   icon: <Folder size={50} />,
  //   content: <StudyMaterialAppContent />,
  // },
  {
    id: "wallpapers",
    title: "Wallpapers",
    icon: <Folder size={50} />,
    content: <WallpapersAppContent />,
    isOnDesktop: false,
  },
];
