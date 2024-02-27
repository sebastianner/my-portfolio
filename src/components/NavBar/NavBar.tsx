"use client";
import classNames from "classnames";
import { NavBarConstants } from "./constants";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import { Dispatch, SetStateAction } from "react";

type Props = {
  showMobile: boolean;
  setShowMobile: Dispatch<SetStateAction<boolean>>;
};

function NavBar({ showMobile, setShowMobile }: Props) {
  return (
    <header className="sticky top-0">
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
        <button
          onClick={() => {
            setShowMobile(!showMobile);
          }}
        >
          <HamburgerMenuIcon
            className={classNames("md:hidden", "mt-5", {
              "hidden ": showMobile,
            })}
            isOpen={false}
          />
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
