"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import type { NavItem } from "@/types/app";

type Props = {
  navItem: NavItem;
};

function NavBar({ navItem }: Props) {
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

  useEffect(() => {
    const scrolled = window.scrollY >= 150;
    setIsScrolled(scrolled);
  }, []);

  // to do: implement WEB ARIA.
  // const navBarLinksAriaDescription = (section: NavBarConstants) => {
  //   return `auto-scroll to the ${section} section`;
  // };

  return (
    <header className={classNames("sticky top-0 z-[4]")}>
      <nav
        className={classNames(
          "shadow-sm",
          "w-screen h-20",
          "font-semibold text-lg",
          "flex items-center justify-center",
          "pr-10 pl-6 py-8 md:px-14 transition-colors",
          {
            "navBar-backdrop": isScrolled,
          }
        )}
      >
        <ul className="gap-4 hidden md:flex">
          {navItem.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <HamburgerMenuIcon
          className={classNames("md:hidden z-[5]", "top-3 ml-6")}
        />
      </nav>
    </header>
  );
}

export default NavBar;
