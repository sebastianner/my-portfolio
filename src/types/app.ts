export type NavItem = {
  href: string;
  name: string;
}[];

export type CardState = {
  [cardKey: string]: { position: number; isActive: boolean } | undefined;
};
