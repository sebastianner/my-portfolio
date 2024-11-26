import classNames from "classnames";
import ContactButton from "../ContactButton/ContactButton";

type Props = {
  className?: string;
  icons: {
    alt: string;
    href: string;
    src: string;
  }[];
};

function SocialIconRow({ className, icons }: Props) {
  return (
    <div className={classNames(className, "flex gap-3")}>
      {icons.map(({ src, alt, href }) => {
        return (
          <div key={alt}>
            <ContactButton
              href={href}
              icon={{
                alt,
                src,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SocialIconRow;
