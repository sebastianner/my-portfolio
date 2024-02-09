import { GLOBAL_STYLES } from "../../global-styles/index";
import classNames from "classnames";

function ContactForm() {
  return (
    <form
      className={classNames(
        "flex flex-col pl-[40px]",
        "bg-card-green h-[600px] rounded-2xl",
        "gap-5 p-5",
        "md:p-5 md:items-center"
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
            Contact me
          </legend>
          <div className="flex flex-col gap-5 items-center w-full">
            <input
              id="Email"
              name="Email"
              type="text"
              placeholder="youremail@example.com"
              className={classNames(
                "bg-gray-100",
                GLOBAL_STYLES.subtitle,
                "rounded-xl w-full",
                "hover:bg-gray-50",
                "p-2"
              )}
            />
            <textarea
              id="Message"
              name="Message"
              placeholder="Hello Sebastian..."
              className={classNames(
                "bg-gray-100",
                GLOBAL_STYLES.subtitle,
                "rounded-xl w-full h-[130px]",
                "text-pretty",
                "hover:bg-gray-50",
                "p-2"
              )}
            />
          </div>
        </div>
        {/* TODO: Implement server actions */}
        <input
          type="submit"
          value="Submit"
          className={classNames(
            "bg-gray-100 rounded-full",
            "w-[150px] h-[50px]",
            "cursor-pointer",
            "hover:bg-gray-50",
            "font-medium tex-center"
          )}
        />
      </fieldset>
    </form>
  );
}

export default ContactForm;
