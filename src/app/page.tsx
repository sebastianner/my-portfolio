"use client";
import { Fragment, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import TechStack from "@/views/TechStack/TechStack";
import ContactMe from "@/views/ContactMe/ContactMe";
import Work from "@/views/Work/Work";
import Hero from "@/views/Hero/Hero";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/views/About/About"), {
  ssr: false,
});

export default function Home() {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  return (
    <Fragment>
      <HamburgerMenu setShowMobile={setShowMobile} showMobile={showMobile} />
      <NavBar />
      <Hero />
      <About />
      <Work />
      <TechStack />
      <ContactMe />
    </Fragment>
  );
}
