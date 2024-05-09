import classNames from "classnames";
import { NavBarConstants } from "./constants";
import { useEffect, useState } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY >= 150;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarLinksAriaDescription = (section: NavBarConstants) => {
    return `auto-scroll to the ${section} section`;
  };

  return (
    <header
      className={classNames("sticky top-0 z-[4]", {
        "bg-[#071a10]": isScrolled,
      })}
    >
      <nav
        className={classNames(
          "bg-transparent shadow-sm",
          "w-screen h-20",
          "flex items-center justify-between",
          "font-semibold text-lg",
          "pr-10 pl-6 py-8 md:px-14"
        )}
      >
        {NavBarConstants.name}
        <ul className="gap-4 hidden md:flex">
          <li>
            <a
              //to do: replace aria-description
              aria-description={navBarLinksAriaDescription(
                NavBarConstants.home
              )}
              href={"#home"}
            >
              {NavBarConstants.home}
            </a>
          </li>
          <a
            aria-description={navBarLinksAriaDescription(
              NavBarConstants.aboutMe
            )}
            href={"#about"}
          >
            <li>{NavBarConstants.aboutMe}</li>
          </a>
          <a
            aria-description={navBarLinksAriaDescription(
              NavBarConstants.experience
            )}
            href={"#work"}
          >
            <li>{NavBarConstants.experience}</li>
          </a>
          {/* <a href={"#projects"}>
            <li>Projects</li>
          </a> */}
          <a
            aria-description={navBarLinksAriaDescription(
              NavBarConstants.contact
            )}
            href={"#contact"}
          >
            <li>{NavBarConstants.contact}</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
