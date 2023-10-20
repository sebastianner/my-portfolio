import type { Metadata } from "next";
import { Fragment } from "react";
import { NavBar } from "@/components/";
import { About, Hero } from "@/views/";
import { SectionBuilder } from "@/composition";
// import { SphereCanvas } from "@/components/canvas";

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
    </Fragment>
  );
}
