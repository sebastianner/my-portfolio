import classNames from "classnames";
import { NavBarConstants } from "../NavBar/constants";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styles from "./HamburgerMenu.module.css";

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
  const menuListRef = useRef<HTMLUListElement>(null);

  const handleSetShowMobile = () => {
    setShowMobile(!showMobile);
  };

  useEffect(() => {
    const menuOptions = menuListRef.current?.childNodes;
    const timeouts: NodeJS.Timeout[] = [];
    if (showMobile) {
      menuOptions?.forEach((menuOption, index) => {
        const timeoutId = setTimeout(() => {
          if (menuOption instanceof Element) {
            menuOption.classList.add(styles.fadein);
          }
        }, index * 200);
        timeouts.push(timeoutId);
      });
    }
    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      menuOptions?.forEach((menuOption) => {
        if (menuOption instanceof Element) {
          menuOption.classList.remove(styles.fadein);
        }
      });
    };
  }, [showMobile]);

  return (
    <aside
      className={classNames(
        "fixed z-10",
        "w-screen h-screen text-center",
        "flex flex-col justify-center",
        "font-semibold text-2xl",
        "bg-[#051C11DB]",
        { "bg-transparent h-0": !showMobile },
        styles.hamburgerMenu,
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
        <HamburgerMenuIcon className={"md:hidden"} isOpen={showMobile} />
      </button>

      <ul className={classNames("flex flex-col gap-5")} ref={menuListRef}>
        <a
          href={"#home"}
          onClick={handleSetShowMobile}
          className={classNames(styles.fadeItem, { "opacity-0": !showMobile })}
        >
          <li>{NavBarConstants.home}</li>
        </a>
        <a
          href={"#about"}
          onClick={handleSetShowMobile}
          className={classNames(styles.fadeItem, { "opacity-0": !showMobile })}
        >
          <li>{NavBarConstants.aboutMe}</li>
        </a>
        <a
          href={"#work"}
          onClick={handleSetShowMobile}
          className={classNames(styles.fadeItem, { "opacity-0": !showMobile })}
        >
          <li>{NavBarConstants.experience}</li>
        </a>
        {/* <a href={"#projects"} onClick={handleSetShowMobile}>
            <li>Projects</li>
          </a> */}
        <a
          href={"#contact"}
          onClick={handleSetShowMobile}
          className={classNames(styles.fadeItem, { "opacity-0": !showMobile })}
        >
          <li>{NavBarConstants.contact}</li>
        </a>
      </ul>
    </aside>
  );
}

export default HamburgerMenu;
