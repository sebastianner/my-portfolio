"use client";
import classNames from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Hero.module.scss";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import { SOCIALS } from "@/global-constants";
import { GLOBAL_STYLES } from "@/global-styles";
import { GithubIcon, LinkedInIcon } from "@/icons/Icons";
import getCmsData from "@/utils/getCmsData";
import { Hero as HeroType, allHeros } from "contentlayer/generated";
import dynamic from "next/dynamic";

const CanvasStars = dynamic(
  () => import("@/components/CanvasStars/CanvasStars"),
  {
    ssr: false,
  }
);

type Props = {
  className?: string;
};

const cmsData = getCmsData<HeroType>(allHeros);

function Hero({ className }: Props) {
  return (
    <main
      className={classNames(
        "mx-auto mt-3",
        "w-[80%] h-[646px]",
        "rounded-[41px]",
        "flex justify-center items-center",
        "bg-slytherin-secondary relative",
        className
      )}
      id="home"
    >
      <CanvasStars className="w-full h-full" />
      <div
        className={classNames(
          "flex md:gap-5 2xl:gap-36",
          "flex-col-reverse lg:flex-row",
          "justify-center items-center absolute"
        )}
      >
        <section
          className={classNames(
            "flex flex-col gap-6",
            "text-center lg:text-left",
            "max-w-[200px] sm:max-w-[430px] xl:max-w-none"
          )}
        >
          <div className="flex flex-col gap-3">
            <BaseHeading level={1}>{cmsData.intro.raw}</BaseHeading>
            <span className={GLOBAL_STYLES.paragraph}>
              {parse(cmsData.introDescription.html)}
            </span>
          </div>
          <span
            className={classNames(
              "flex gap-1 justify-center",
              "lg:justify-start",
              styles.icons
            )}
          >
            <Link href={SOCIALS.linkedIn} target="_blank">
              <LinkedInIcon />
            </Link>
            <Link href={SOCIALS.gitHub} target="_blank">
              <GithubIcon />
            </Link>
          </span>
        </section>
        <section className={classNames(styles.image)}>
          <Image
            priority
            alt="My picture"
            className="border-2 profile-picture"
            height={330}
            src={cmsData.profilePicture}
            width={330}
          />
        </section>
      </div>
    </main>
  );
}

export default Hero;
