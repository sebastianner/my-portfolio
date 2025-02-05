"use client";
import { Post, allPosts } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { useReducer } from "react";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import NavBar from "@/components/NavBar/NavBar";
import { AppInitialConext, Context } from "@/context/context";
import { AppStateType } from "@/types/context";
import { navItems } from "@/utils/mockData/data";
import ContactMe from "@/views/ContactMe/ContactMe";
import Hero from "@/views/Hero/Hero";
import TechStack from "@/views/TechStack/TechStack";
import Work from "@/views/Work/Work";

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

  console.log(allPosts);

  return (
    <>
      <h1>{allPosts[0].title}</h1>
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
