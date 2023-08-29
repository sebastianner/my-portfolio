import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import NavBar from "@/components/navBar/NavBar";
import Link from "next/link";
import { LinkedInIcon, GithubIcon } from "@/icons/icons";

export const metadata: Metadata = {
  title: "Sebastian M - Portfolio",
  description: "Sebastian Mera Frontend developer portfolio",
};

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <main className="flex justify-center items-center h-screen w-screen gap-20">
        {/* info section */}
        <section className="flex flex-col w-[460px] gap-8">
          <h1 className="text-[55px] font-bold">React Front-End Developer🎨</h1>
          <p className="text-lg	font-light w-full">
            Hey there, I'm Sebastian Mera, a dedicated React Front-end Developer
            from Colombia. 🇨🇴📍
          </p>
          <span className="flex gap-1">
            <Link
              href={"https://www.linkedin.com/in/sebastian-mera/"}
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link href={"https://github.com/sebastianner"} target="_blank">
              <GithubIcon />
            </Link>
          </span>
        </section>
        {/*  picture section */}
        <section>
          <Image
            src={
              "https://media.licdn.com/dms/image/C5603AQGQdcEWEaKR8Q/profile-displayphoto-shrink_800_800/0/1657140097690?e=1698883200&v=beta&t=LKjxsb95A6co3tk4nWthWWyipEU8gz9vhJJcnUzcRKc"
            }
            alt={"My picture"}
            width={300}
            height={300}
            className="border-2 profile-picture"
          />
        </section>
      </main>
      {/* <section className="w-auto h-[500px]"></section> */}
    </Fragment>
  );
}
