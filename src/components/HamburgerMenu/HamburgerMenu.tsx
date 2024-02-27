import classNames from "classnames";
import { NavBarConstants } from "../NavBar/constants";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import { Dispatch, SetStateAction } from "react";

type Props = {
  className?: string;
  color?: string;
  showMobile: boolean;
  setShowMobile: Dispatch<SetStateAction<boolean>>;
};

function HamburgerMenu({
  className,
  color = "#fff",
  showMobile,
  setShowMobile,
}: Props) {
  return (
    <aside
      className={classNames(
        "fixed z-10",
        "w-screen h-screen text-center",
        "flex flex-col justify-center",
        "font-semibold text-2xl",
        "bg-[#051C11DB]",
        className
      )}
      style={{ color: color }}
    >
      <button
        onClick={() => {
          setShowMobile(!showMobile);
        }}
        className="absolute top-[25px] right-[40px]"
      >
        <HamburgerMenuIcon
          className={classNames({ "hidden ": !showMobile })}
          isOpen={showMobile}
        />
      </button>

      <ul className="flex flex-col gap-5">
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
    </aside>
  );
}

export default HamburgerMenu;
