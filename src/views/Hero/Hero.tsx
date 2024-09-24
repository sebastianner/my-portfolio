"use client";
import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, GithubIcon } from "@/icons/Icons";
import { GLOBAL_STYLES } from "@/global-styles";
import { SOCIALS } from "@/global-constants";
import { HEADING, DESCRIPTION } from "./constants";
import styles from "./Hero.module.scss";
import classNames from "classnames";
import BaseHeading from "@/components/BaseHeading/BaseHeading";

type Props = {
  className?: string;
};

function Hero({ className }: Props) {
  return (
    <main
      className={classNames(
        "w-screen md:p-10",
        "pt-3 pb-20 px-8 ",
        "flex justify-center items-center",
        "h-mobile md:h-screen",
        className
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
            <BaseHeading level={1}>{HEADING}</BaseHeading>
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
