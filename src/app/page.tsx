import type { Metadata } from "next";
import { Fragment } from "react";
import NavBar from "@/components/NavBar/NavBar";
import { About, Hero } from "@/views/";
import SectionBuilder from "@/composition/SectionBuilder";
import TimeLine from "@/components/TimeLine/TimeLine";
import TechStack from "@/views/TechStack/TechStack";

export const metadata: Metadata = {
  title: "Sebastian M - Portfolio",
  description: "Sebastian Mera Frontend developer portfolio",
};

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <SectionBuilder id={"about"}>
        <About />
      </SectionBuilder>
      <SectionBuilder id={"work"}>
        <TimeLine />
      </SectionBuilder>
      <SectionBuilder id={"TechStack"}>
        <TechStack />
      </SectionBuilder>
    </Fragment>
  );
}
