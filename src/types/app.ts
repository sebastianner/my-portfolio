export type NavItem = {
  href: string;
  name: string;
};

export type CardState = {
  [cardKey: string]: { isActive: boolean; position: number } | undefined;
};
