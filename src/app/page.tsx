"use client";
import { createContext, Dispatch, useReducer } from "react";
import NavBar from "@/components/NavBar/NavBar";
import TechStack from "@/views/TechStack/TechStack";
import ContactMe from "@/views/ContactMe/ContactMe";
import Work from "@/views/Work/Work";
import Hero from "@/views/Hero/Hero";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import dynamic from "next/dynamic";
import type { AppContext } from "@/types/context";
import { navItems } from "@/utils/mockData/data";

type AppContextType = {
  AppState: AppContext;
  dispatchAppState: Dispatch<Partial<AppContext>>;
};

const About = dynamic(() => import("@/views/About/About"), {
  ssr: false,
});

const AppInitialConext: AppContext = {
  isHamburgerMenuOpen: false,
};

// to do: Move createContext to it's own file
export const Context = createContext<AppContextType>({
  AppState: AppInitialConext,
  dispatchAppState: () => null,
});

export default function Home() {
  const [AppState, dispatchAppState] = useReducer(
    (prev: AppContext, next: Partial<AppContext>) => {
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
