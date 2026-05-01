import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import NavBar from "@/components/NavBar/NavBar";
import { NavItem } from "@/types/app";
import ContactMe from "@/views/ContactMe/ContactMe";
import Work from "@/views/Work/Work";
import About from "@/views/About/About";
import Hero from "@/views/Hero/Hero";
import TechStack from "@/views/TechStack/TechStack";
import { getContent } from "@/utils/getContent";
import type {
  HeroType,
  OverviewType,
  WorkSectionType,
} from "@/types/content.types";

export default async function Home() {
  const navBarContent: any = (await getContent("navBar")).at(0);
  const heroContent: any = (await getContent("hero")).at(0);
  const overviewContent = (await getContent("overview")).at(0);
  const workContent = (await getContent("work")).at(0);

  const navItems = navBarContent?.navBar?.map((navItem: string): NavItem => {
    return {
      href: `#${navItem.split(" ")[0].toLocaleLowerCase()}`,
      name: navItem,
    };
  });

  return (
    <>
      <NavBar navItem={navItems} />
      <Hero content={heroContent as HeroType} />
      <About content={overviewContent as OverviewType} />
      <Work content={workContent as WorkSectionType} />
      <TechStack />
      <ContactMe />
    </>
  );
}
