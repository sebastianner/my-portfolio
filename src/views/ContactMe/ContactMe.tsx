import BaseHeading from "@/components/BaseHeading/BaseHeading";
import ContactButton from "@/components/ContactButton/ContactButton";
import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";

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
            src: "/assets/email-9-svgrepo-com.svg",
            alt: "Email icon",
          }}
          text={"Email"}
        />
        <ContactButton
          behavior={"Link"}
          icon={{
            src: "/assets/linkedin-svgrepo-com.svg",
            alt: "LinkedIn Icon",
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
