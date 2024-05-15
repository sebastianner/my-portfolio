"use client";
import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, GithubIcon } from "@/icons";
import { GLOBAL_STYLES } from "@/global-styles";
import { SOCIALS } from "@/global-constants";
import { HEADING, DESCRIPTION, HERO_HEIGHT } from "./constants";
import styles from "./Hero.module.scss";
import classNames from "classnames";

type Props = {
  className?: string;
};

function Hero({ className }: Props) {
  return (
    <main
      className={classNames(
        "flex justify-center items-center",
        " w-screen p-10",
        className,
        HERO_HEIGHT.style
      )}
      id="home"
    >
      <div
        className={classNames(
          "flex flex-wrap-reverse md:gap-10",
          "justify-center items-center"
        )}
      >
        <section
          className={classNames(
            "flex flex-col max-w-[460px] gap-6",
            "text-center lg:text-left"
          )}
        >
          <div>
            <h1 className={classNames(GLOBAL_STYLES.title, styles.title)}>
              {HEADING}
            </h1>
            <div
              className={classNames(styles.paragraph, "flex flex-col relative")}
            >
              <p
                className={GLOBAL_STYLES.paragraph}
                dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
              />
            </div>
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
            alt={"My picture"}
            className="border-2 profile-picture"
            height={330}
            priority
            src={
              "https://media.licdn.com/dms/image/C5603AQGQdcEWEaKR8Q/profile-displayphoto-shrink_800_800/0/1657140097690?e=1698883200&v=beta&t=LKjxsb95A6co3tk4nWthWWyipEU8gz9vhJJcnUzcRKc"
            }
            width={330}
          />
        </section>
      </div>
    </main>
  );
}

export default Hero;
