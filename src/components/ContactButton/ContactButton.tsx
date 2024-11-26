import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./ContactButton.module.scss";

type Props = {
  className?: string;
  href: string;
  icon: {
    alt: string;
    src: string;
  };
};

function ContactButton({ className, icon, href }: Props) {
  return (
    <button className={classNames(className, styles.contactButton)}>
      {href && (
        <Link className="flex items-center gap-3" href={href} target="_blank">
          <Image alt={icon.alt} height={60} src={icon.src} width={60} />
        </Link>
      )}
    </button>
  );
}

export default ContactButton;
