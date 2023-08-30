import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, GithubIcon } from "@/icons/icons";
import { TimeTurnerCanvas } from "@/components/canvas";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <main className="flex justify-center items-center h-screen w-screen gap-20">
      {/* info section */}
      <section className="flex flex-col w-[460px] gap-8">
        {/* TODO IF DEVICE IS SLOW DONT RENDER THE TIME TURNER INSTEAD USE 🎨*/}
        <h1 className="text-[55px] font-bold relative">
          React Front-End Developer
        </h1>
        <TimeTurnerCanvas />
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
          width={330}
          height={330}
          className="border-2 profile-picture"
          priority
        />
      </section>
    </main>
  );
}

export { Hero };
