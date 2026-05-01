export type HeroType = {
  slug: string;
  title: string;
  description: string;
  profilePicture: string;
  content: string;
};

type OverviewCard = {
  description: string;
  technology: string;
  icon: string;
};

export type OverviewType = {
  slug: string;
  title: string;
  overview: string;
  content: string;
  cards: OverviewCard[];
};

type ISODateString = string; // e.g. "2023-10-10"
type Present = "Present";

type DateRange = [ISODateString, ISODateString | Present];

type WorkCard = {
  description: string; // markdown string
  company: string;
  companyImage: string;
  title: string;
  date: DateRange;
};

export type WorkSectionType = {
  slug: string;
  content: string;
  workCard: WorkCard[];
};
