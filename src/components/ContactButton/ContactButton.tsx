import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./ContactButton.module.scss";

type Behevior = "Email" | "Link";

type Props = {
  behavior: Behevior;
  className?: string;
  email?: string;
  icon: {
    alt: string;
    src: string;
  };
  link?: string;
  text: string;
};

function ContactButton({
  className,
  behavior,
  icon,
  text,
  email,
  link,
}: Props) {
  const href = behavior === "Email" ? `mailto:${email}` : link;
  return (
    <button
      className={classNames(
        className,
        "bg-secondary-color px-5 py-3",
        "text-center text-white",
        styles.contactButton
      )}
    >
      {href && (
        <Link className="flex items-center gap-3" href={href} target="_blank">
          <Image alt={icon.alt} height={30} src={icon.src} width={30} />
          <span>{text}</span>
        </Link>
      )}
    </button>
  );
}

export default ContactButton;
