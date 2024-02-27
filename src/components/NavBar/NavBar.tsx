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

  return (
    <header
      className={classNames(
        "sticky top-0 z-[4]",
        {
          "bg-[#071a10]": isScrolled,
        },
        "md:bg-transparent"
      )}
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
          <a href={"#home"}>
            <li>{NavBarConstants.home}</li>
          </a>
          <a href={"#about"}>
            <li>{NavBarConstants.aboutMe}</li>
          </a>
          <a href={"#work"}>
            <li>{NavBarConstants.experience}</li>
          </a>
          {/* <a href={"#projects"}>
            <li>Projects</li>
          </a> */}
          <a href={"#contact"}>
            <li>{NavBarConstants.contact}</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
