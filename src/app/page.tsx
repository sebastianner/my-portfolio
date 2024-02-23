import type { Metadata } from "next";
import { Fragment } from "react";
import NavBar from "@/components/NavBar/NavBar";
import TechStack from "@/views/TechStack/TechStack";
import ContactMe from "@/views/ContactMe/ContactMe";
import Work from "@/views/Work/Work";
import About from "@/views/About/About";
import Hero from "@/views/Hero/Hero";

export const metadata: Metadata = {
  title: "Sebastian M - Portfolio",
  description: "Sebastian Mera Frontend developer portfolio",
};

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <About />
      <Work />
      <TechStack />
      <ContactMe />
    </Fragment>
  );
}
