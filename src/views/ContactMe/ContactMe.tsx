import classNames from "classnames";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import SocialIconRow from "@/components/SocialIconRow/SocialIconRow";

function ContactMe() {
  return (
    <section
      className={classNames(
        "p-20 w-full text-center",
        "flex flex-col gap-7",
        "flex-wrap items-center"
      )}
      id="contact"
    >
      <BaseHeading level={2}>Reach Out and let’s talk! 👋🏻</BaseHeading>
      <SocialIconRow
        icons={[
          {
            alt: "LinkedIn icon",
            href: "https://www.linkedin.com/in/sebastian-mera/",
            src: "/assets/LinkedIn.svg",
          },
          {
            alt: "Email Icon",
            href: "mailto:sebastianma87@gmail.com",
            src: "/assets/emailIcon.svg",
          },
          {
            alt: "GitHub Icon",
            href: "https://github.com/sebastianner",
            src: "/assets/github.svg",
          },
        ]}
      />
    </section>
  );
}

export default ContactMe;
