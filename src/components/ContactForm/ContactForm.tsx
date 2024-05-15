import { GLOBAL_STYLES } from "../../global-styles/index";
import classNames from "classnames";
import { CONTACT_ME } from "./constants";

type Props = { className?: string };

function ContactForm({ className }: Props) {
  return (
    <form
      className={classNames(
        "flex flex-col pl-[40px]",
        "bg-card-green h-[600px] rounded-2xl",
        "gap-5 p-5",
        "md:p-5 md:items-center",
        className
      )}
    >
      <fieldset
        className="w-[90%] md:w-[80%] flex flex-col gap-5 md:items-center"
        id="contact-form-fieldset"
      >
        <div
          className={classNames("flex flex-col gap-5 md:items-center w-full")}
        >
          <legend
            className={classNames("text-left text-white", GLOBAL_STYLES.title)}
          >
            {CONTACT_ME}
          </legend>
          <div className="flex flex-col gap-5 items-center w-full">
            <input
              className={classNames(
                "bg-gray-100",
                GLOBAL_STYLES.subtitle,
                "rounded-xl w-full",
                "hover:bg-gray-50",
                "p-2"
              )}
              id="Email"
              name="Email"
              placeholder="youremail@example.com"
              type="text"
            />
            <textarea
              className={classNames(
                "bg-gray-100",
                GLOBAL_STYLES.subtitle,
                "rounded-xl w-full h-[130px]",
                "text-pretty",
                "hover:bg-gray-50",
                "p-2"
              )}
              id="Message"
              name="Message"
              placeholder="Hello Sebastian..."
            />
          </div>
        </div>
        {/* TODO: Implement server actions */}
        <input
          className={classNames(
            "bg-gray-100 rounded-full",
            "w-[150px] h-[50px]",
            "cursor-pointer",
            "hover:bg-gray-50",
            "font-medium tex-center text-black"
          )}
          type="submit"
          value="Submit"
        />
      </fieldset>
    </form>
  );
}

export default ContactForm;
