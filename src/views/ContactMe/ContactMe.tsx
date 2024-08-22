import SectionBuilder from "@/HOC/SectionBuilder";
import classNames from "classnames";
// import ContactForm from "@/components/ContactButton/ContactForm";

function ContactMe() {
  return (
    <div
      className={classNames(
        "w-screen bg-slytherin-green",
        "flex flex-col justify-center items-center",
        "h-screen px-6",
        "sm:px-20 sm:pb-16"
      )}
    >
      {/* <ContactForm className="w-full max-w-[800px]" /> */}
    </div>
  );
}

export default SectionBuilder(ContactMe, "contact");
