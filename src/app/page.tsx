"use client";
import { useReducer } from "react";
import NavBar from "@/components/NavBar/NavBar";
import TechStack from "@/views/TechStack/TechStack";
import ContactMe from "@/views/ContactMe/ContactMe";
import Work from "@/views/Work/Work";
import Hero from "@/views/Hero/Hero";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import dynamic from "next/dynamic";
import { navItems } from "@/utils/mockData/data";
import { AppInitialConext, Context } from "@/context/context";
import { AppStateType } from "@/types/context";

const About = dynamic(() => import("@/views/About/About"), {
  ssr: false,
});

export default function Home() {
  const [AppState, dispatchAppState] = useReducer(
    (prev: AppStateType, next: Partial<AppStateType>) => {
      return { ...prev, ...next };
    },
    AppInitialConext
  );

  return (
    <Context.Provider value={{ AppState, dispatchAppState }}>
      <HamburgerMenu navItem={navItems} />
      <NavBar navItem={navItems} />
      <Hero />
      <About />
      <Work />
      <TechStack />
      <ContactMe />
    </Context.Provider>
  );
}
