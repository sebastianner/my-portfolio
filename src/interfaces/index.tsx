export interface SPHERE_COORDINATES_INTERFACE {
  position: {
    extraSmall: {
      [key: number]: [number, number, number];
    };
    initial: {
      [key: number]: [number, number, number];
    };
    medium: {
      [key: number]: [number, number, number];
    };
    small: {
      [key: number]: [number, number, number];
    };
  };
  rotation: {
    initial: {
      [key: number]: [number, number, number];
    };
    medium: {
      [key: number]: [number, number, number];
    };
    small: {
      [key: number]: [number, number, number];
    };
  };
}

export interface CANVAS_MEDIA_QUERIES_INTERFACE {
  extraSmall: number;
  medium: number;
  small: number;
}

export interface CANVAS_HEIGHT_INTERFACE {
  extraSmall: number;
  initial: number;
  small: number;
}

export interface CANVAS_FOV_INTERFACE {
  initial: number;
}

export interface SPHERE_SCALE_INTERFACE {
  extraSmall: number;
  initial: number;
  small: number;
}

export interface HERO_HEIGHT_INTERFACE {
  style: string;
}

export interface SOCIALS_INTERFACE {
  email: string;
  gitHub: string;
  linkedIn: string;
}

interface HIGHLIGHTED_TECH_INFO {
  description: string;
  icon: JSX.Element;
  technology: string;
}

export interface HIGHLIGHTED_TECH_INTERFACE {
  info: Array<HIGHLIGHTED_TECH_INFO>;
}
