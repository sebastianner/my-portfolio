import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, GithubIcon } from "@/icons";
import { GLOBAL_STYLES } from "@/global-styles";
import { SOCIALS } from "@/global-constants";
import { HEADING, DESCRIPTION, HERO_HEIGHT } from "./constants";

function Hero() {
  return (
    <main
      className={`flex justify-center items-center w-screen p-10 ${HERO_HEIGHT.style}`}
    >
      <div className="flex flex-wrap-reverse justify-center items-center md:gap-10">
        {/* info section */}
        <section className="flex flex-col max-w-[460px] gap-6 text-center lg:text-left">
          {/* TODO IF DEVICE IS SLOW DONT RENDER THE TIME TURNER INSTEAD USE 🎨*/}
          <h1 className={GLOBAL_STYLES.title}>{HEADING}</h1>
          <div className="flex flex-col relative">
            <p
              className={GLOBAL_STYLES.paragraph}
              dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
            />
          </div>
          <span className="flex gap-1 justify-center lg:justify-start">
            <Link href={SOCIALS.linkedIn} target="_blank">
              <LinkedInIcon />
            </Link>
            <Link href={SOCIALS.gitHub} target="_blank">
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
      </div>
    </main>
  );
}

export default Hero;
