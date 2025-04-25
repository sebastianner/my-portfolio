"use client";
import dynamic from "next/dynamic";
import { useReducer } from "react";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import NavBar from "@/components/NavBar/NavBar";
import { AppInitialConext, Context } from "@/context/context";
import { NavItem } from "@/types/app";
import { AppStateType } from "@/types/context";
import getCmsData from "@/utils/getCmsData";
import ContactMe from "@/views/ContactMe/ContactMe";
import Work from "@/views/Work/Work";
import { NavBar as NavBarType, allNavBars } from "contentlayer/generated";

const About = dynamic(() => import("@/views/About/About"), {
  ssr: false,
});

const Hero = dynamic(() => import("@/views/Hero/Hero"), {
  ssr: false,
});

const TechStack = dynamic(() => import("@/views/TechStack/TechStack"), {
  ssr: false,
});

const cmsData = getCmsData<NavBarType>(allNavBars);

const navItems = cmsData.navBar.map((navItem): NavItem => {
  return {
    href: `#${navItem.split(" ")[0].toLocaleLowerCase()}`,
    name: navItem,
  };
});

export default function Home() {
  const [AppState, dispatchAppState] = useReducer(
    (prev: AppStateType, next: Partial<AppStateType>) => {
      return { ...prev, ...next };
    },
    AppInitialConext
  );

  return (
    <>
      <Context.Provider value={{ AppState, dispatchAppState }}>
        <HamburgerMenu navItem={navItems} />
        <NavBar navItem={navItems} />
        <Hero />
        <About />
        <Work />
        <TechStack />
        <ContactMe />
      </Context.Provider>
    </>
  );
}
