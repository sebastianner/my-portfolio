import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

type Behevior = "Email" | "Link";

type Props = {
  className?: string;
  icons: {
    alt: string;
    behavior: Behevior;
    href: string;
    src: string;
  }[];
};

function SocialIconRow({ className, icons }: Props) {
  return (
    <div className={classNames(className)}>
      {icons.map(({ src, behavior, alt }) => {
        const href = behavior === "Email" ? `mailto:${src}` : src;
        return (
          <button className={classNames("")} key={alt}>
            <Link href={href} target="_blank">
              <Image alt={alt} height={30} src={src} width={30} />
            </Link>
          </button>
        );
      })}
    </div>
  );
}

export default SocialIconRow;
