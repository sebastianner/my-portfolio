import {
  SPHERE_COORDINATES_INTERFACE,
  CANVAS_MEDIA_QUERIES_INTERFACE,
  CANVAS_HEIGHT_INTERFACE,
  CANVAS_FOV_INTERFACE,
  SPHERE_SCALE_INTERFACE,
  HERO_HEIGHT_INTERFACE,
  SOCIALS_INTERFACE,
  HIGHLIGHTED_TECH_INTERFACE,
} from "@/app/interfaces";
import { MobileIcon, BrowserIcon, DesktopIcon } from "@/icons";

export const SPHERE_COORDINATES: SPHERE_COORDINATES_INTERFACE = {
  position: {
    initial: {
      0: [0, 50, 210],
      1: [0, 50, 140],
      2: [0, 50, 70],
      3: [0, 50, 0],
      4: [0, 50, -70],
      5: [0, 50, -140],
      6: [0, 50, -210],
      7: [0, -20, 140],
      8: [0, -20, 70],
      9: [0, -20, 0],
      10: [0, -20, -70],
      11: [0, -20, -140],
    },
    medium: {
      0: [0, 75, 140],
      1: [0, 75, 70],
      2: [0, 75, 0],
      3: [0, 75, -70],
      4: [0, 75, -140],
      5: [0, -5, 140],
      6: [0, -5, 70],
      7: [0, -5, 0],
      8: [0, -5, -70],
      9: [0, -5, -140],
      10: [0, -75, 35],
      11: [0, -75, -35],
    },
    small: {
      0: [0, 80, 70],
      1: [0, 80, 0],
      2: [0, 80, -70],
      3: [0, 30, 70],
      4: [0, 30, 0],
      5: [0, 30, -70],
      6: [0, -20, 70],
      7: [0, -20, 0],
      8: [0, -20, -70],
      9: [0, -70, 70],
      10: [0, -70, 0],
      11: [0, -70, -70],
    },
    extraSmall: {
      0: [0, 80, 15],
      1: [0, 80, -15],
      2: [0, 50, 15],
      3: [0, 50, -15],
      4: [0, 20, 15],
      5: [0, 20, -15],
      6: [0, -10, 15],
      7: [0, -10, -15],
      8: [0, -40, 15],
      9: [0, -40, -15],
      10: [0, -70, 15],
      11: [0, -70, -15],
    },
  },
  rotation: {
    initial: {
      0: [0, 1.8, 0],
      1: [0, 1.7, 0],
      2: [0, 1.65, 0],
      3: [0, 1.55, 0],
      4: [0, 1.45, 0],
      5: [0, 1.4, 0],
      6: [0, 1.25, 0],
      7: [0, 1.7, 0],
      8: [0, 1.65, 0],
      9: [0, 1.55, 0],
      10: [0, 1.45, 0],
      11: [0, 1.4, 0],
    },
    medium: {
      0: [0, 1.8, 0],
      1: [0, 1.7, 0],
      2: [0, 1.65, 0],
      3: [0, 1.55, 0],
      4: [0, 1.45, 0],
      5: [0, 1.8, 0],
      6: [0, 1.7, 0],
      7: [0, 1.65, 0],
      8: [0, 1.5, 0],
      9: [0, 1.4, 0],
      10: [0, 1.6, 0],
      11: [0, 1.6, 0],
    },
    small: {
      0: [0, 1.6, 0],
      1: [0, 1.55, 0],
      2: [0, 1.45, 0],
      3: [0, 1.6, 0],
      4: [0, 1.55, 0],
      5: [0, 1.45, 0],
      6: [0, 1.6, 0],
      7: [0, 1.55, 0],
      8: [0, 1.45, 0],
      9: [0, 1.6, 0],
      10: [0, 1.55, 0],
      11: [0, 1.45, 0],
    },
  },
};

export const CANVAS_MEDIA_QUERIES: CANVAS_MEDIA_QUERIES_INTERFACE = {
  medium: 1265,
  small: 950,
  extraSmall: 640,
};

export const CANVAS_HEIGHT: CANVAS_HEIGHT_INTERFACE = {
  initial: 500,
  small: 800,
  extraSmall: 1000,
};

export const CANVAS_HEIGHT_FOV: CANVAS_FOV_INTERFACE = {
  initial: 20,
};

export const SPHERE_SCALE: SPHERE_SCALE_INTERFACE = {
  initial: 20,
  small: 15,
  extraSmall: 10,
};

export const HERO_HEIGHT: HERO_HEIGHT_INTERFACE = {
  style: "h-mobile sm:h-screen",
};

export const SOCIALS: SOCIALS_INTERFACE = {
  linkedIn: "https://www.linkedin.com/in/sebastian-mera/",
  gitHub: "https://github.com/sebastianner",
  email: "sebastianner23@gmail.com",
};

export const HIGHLIGHTED_TECH: HIGHLIGHTED_TECH_INTERFACE = {
  info: [
    {
      technology: "React Native",
      description: "Mobile developer",
      icon: <MobileIcon />,
    },
    {
      technology: "React - Next.js",
      description: "Front-end React developer",
      icon: <BrowserIcon />,
    },
    {
      technology: "Electron.js",
      description: "Desktop Apps developer",
      icon: <DesktopIcon />,
    },
  ],
};
