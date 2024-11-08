import classNames from "classnames";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import SocialIconRow from "@/components/SocialIconRow/SocialIconRow";
import SectionBuilder from "@/HOC/SectionBuilder";

function ContactMe() {
  return (
    <div className="h-80 mb-80">
      <div
        className={classNames(
          "p-20 w-full",
          "flex justify-center gap-8",
          "flex-wrap"
        )}
      >
        <BaseHeading level={2}>Reach Out and let’s talk!</BaseHeading>
        <SocialIconRow
          icons={[
            {
              alt: "",
              behavior: "Link",
              href: "https://www.linkedin.com/in/sebastian-mera/",
              src: "/assets/LinkedIn.svg",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default SectionBuilder(ContactMe, "contact");
