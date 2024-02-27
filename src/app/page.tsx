"use client";
import { Fragment, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import TechStack from "@/views/TechStack/TechStack";
import ContactMe from "@/views/ContactMe/ContactMe";
import Work from "@/views/Work/Work";
import About from "@/views/About/About";
import Hero from "@/views/Hero/Hero";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import classNames from "classnames";

export default function Home() {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  return (
    <Fragment>
      <HamburgerMenu
        className={classNames({ "hidden top-0": !showMobile })}
        showMobile={showMobile}
        setShowMobile={setShowMobile}
      />
      <NavBar showMobile={showMobile} setShowMobile={setShowMobile} />
      <Hero />
      <About />
      <Work />
      <TechStack />
      <ContactMe />
    </Fragment>
  );
}
