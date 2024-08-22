import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import styles from "./ContactButton.module.scss";

type Behevior = "Email" | "Link";

type Props = {
  className?: string;
  behavior: Behevior;
  icon: {
    src: string;
    alt: string;
  };
  text: string;
  email?: string;
  link?: string;
};

function ContactButton({
  className,
  behavior,
  icon,
  text,
  email,
  link,
}: Props) {
  const href = behavior === "Email" ? email : link;
  return (
    <button
      className={classNames(
        className,
        "bg-card-green px-5 py-3",
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
