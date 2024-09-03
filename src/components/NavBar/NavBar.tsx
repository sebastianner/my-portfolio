"use client";
import classNames from "classnames";
import { NavBarConstants } from "./constants";
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
        <span>{NavBarConstants.name}</span>
        <ul className="gap-4 hidden md:flex">
          {navItem.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <HamburgerMenuIcon className={classNames("md:hidden z-10", "top-3")} />
      </nav>
    </header>
  );
}

export default NavBar;
