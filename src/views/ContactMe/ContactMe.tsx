import classNames from "classnames";
import BaseHeading from "@/components/BaseHeading/BaseHeading";
import ContactButton from "@/components/ContactButton/ContactButton";
import SectionBuilder from "@/HOC/SectionBuilder";

function ContactMe() {
  return (
    <div className="h-80 mb-80">
      <hr />
      <div
        className={classNames(
          "p-20 w-full",
          "flex justify-center gap-8",
          "flex-wrap"
        )}
      >
        <BaseHeading level={2}>Reach Out and let’s talk!</BaseHeading>
        <ContactButton
          behavior={"Email"}
          email="sebastianner23@gmail.com"
          icon={{
            alt: "Email icon",
            src: "/assets/email-9-svgrepo-com.svg",
          }}
          text={"Email"}
        />
        <ContactButton
          behavior={"Link"}
          icon={{
            alt: "LinkedIn Icon",
            src: "/assets/linkedin-svgrepo-com.svg",
          }}
          link="https://www.linkedin.com/in/sebastian-mera/"
          text={"LinkedIn"}
        />
      </div>
      {/* to do: use border, semantically unvaluable hr here */}
      <hr />
    </div>
  );
}

export default SectionBuilder(ContactMe, "contact");
