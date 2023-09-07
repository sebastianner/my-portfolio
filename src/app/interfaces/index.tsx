export interface SPHERE_COORDINATES_INTERFACE {
  position: {
    initial: {
      [key: number]: [number, number, number];
    };
    medium: {
      [key: number]: [number, number, number];
    };
    small: {
      [key: number]: [number, number, number];
    };
    extraSmall: {
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
  medium: number;
  small: number;
  extraSmall: number;
}

export interface CANVAS_HEIGHT_INTERFACE {
  initial: number;
  small: number;
  extraSmall: number;
}

export interface CANVAS_FOV_INTERFACE {
  initial: number;
}

export interface SPHERE_SCALE_INTERFACE {
  initial: number;
  small: number;
  extraSmall: number;
}

export interface HERO_HEIGHT_INTERFACE {
  style: string;
}

export interface SOCIALS_INTERFACE {
  linkedIn: string;
  gitHub: string;
  email: string;
}
