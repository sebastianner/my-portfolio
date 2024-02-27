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
  const handleSetShowMobile = () => {
    setShowMobile(!showMobile);
  };
  return (
    <aside
      className={classNames(
        "fixed z-10",
        "w-screen h-screen text-center",
        "flex flex-col justify-center",
        "font-semibold text-2xl",
        "bg-[#051C11DB]",
        { "bg-transparent h-0": !showMobile },
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

      <ul
        className={classNames("flex flex-col gap-5", {
          "hidden ": !showMobile,
        })}
      >
        <a href={"#home"} onClick={handleSetShowMobile}>
          <li>{NavBarConstants.home}</li>
        </a>
        <a href={"#about"} onClick={handleSetShowMobile}>
          <li>{NavBarConstants.aboutMe}</li>
        </a>
        <a href={"#work"} onClick={handleSetShowMobile}>
          <li>{NavBarConstants.experience}</li>
        </a>
        {/* <a href={"#projects"} onClick={handleSetShowMobile}>
            <li>Projects</li>
          </a> */}
        <a href={"#contact"} onClick={handleSetShowMobile}>
          <li>{NavBarConstants.contact}</li>
        </a>
      </ul>
    </aside>
  );
}

export default HamburgerMenu;
