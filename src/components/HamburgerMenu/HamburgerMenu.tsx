"use client";
import classNames from "classnames";
import { NavBarConstants } from "../NavBar/constants";
import { useContext, useEffect, useReducer, useRef } from "react";
import styles from "./HamburgerMenu.module.scss";
import { Context } from "@/app/page";

type Props = {
  className?: string;
  color?: string;
};

type StackState = {
  stack1: boolean;
  stack2: boolean;
  stack3: boolean;
  stack4: boolean;
};

type StackAction = Partial<StackState>;

const stackInitialState = {
  stack1: false,
  stack2: false,
  stack3: false,
  stack4: false,
};

function HamburgerMenu({ className, color = "#fff" }: Props) {
  const menuListRef = useRef<HTMLUListElement>(null);
  const { AppState, dispatchAppState } = useContext(Context);
  const isOpen = AppState.isHamburgerMenuOpen;
  const [stack, dispatchStack] = useReducer(
    (prev: StackState, next: StackAction) => {
      return { ...prev, ...next };
    },
    stackInitialState
  );

  const handleCloseMenu = () => {
    dispatchAppState({ isHamburgerMenuOpen: false });
  };

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    if (isOpen) {
      const stackLength = Object.keys(stack).length;
      for (let index = 0; index <= stackLength; index++) {
        const timeoutId = setTimeout(() => {
          const stackNumber = `stack${index + 1}`;
          dispatchStack({ [stackNumber]: true });
        }, index * 200);
        timeouts.push(timeoutId);
      }
    } else {
      dispatchStack(stackInitialState);
    }
    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <section
      className={classNames(
        "left-full fixed z-[1] md:hidden",
        "w-screen h-screen text-center",
        "flex flex-col justify-center",
        "font-semibold text-2xl",
        "bg-[#051C11DB]",
        styles.hamburgerMenu,
        { "!left-0": isOpen },
        className
      )}
      style={{ color: color }}
    >
      <ul className={classNames("flex flex-col gap-5")} ref={menuListRef}>
        <a
          className={classNames(
            styles.fadeItem,
            { [styles.fadein]: stack.stack1 },
            {
              "opacity-0 hidden": !isOpen,
            }
          )}
          href={"#home"}
          onClick={handleCloseMenu}
        >
          <li>{NavBarConstants.home}</li>
        </a>
        <a
          className={classNames(
            styles.fadeItem,
            { [styles.fadein]: stack.stack2 },
            {
              "opacity-0 hidden": !isOpen,
            }
          )}
          href={"#about"}
          onClick={handleCloseMenu}
        >
          <li>{NavBarConstants.aboutMe}</li>
        </a>
        <a
          className={classNames(
            styles.fadeItem,
            { [styles.fadein]: stack.stack3 },
            {
              "opacity-0 hidden": !isOpen,
            }
          )}
          href={"#work"}
          onClick={handleCloseMenu}
        >
          <li>{NavBarConstants.experience}</li>
        </a>
        {/* <a href={"#projects"} onClick={handleCloseMenu}>
            <li>Projects</li>
          </a> */}
        <a
          className={classNames(
            styles.fadeItem,
            { [styles.fadein]: stack.stack4 },
            {
              "opacity-0 hidden": !isOpen,
            }
          )}
          href={"#contact"}
          onClick={handleCloseMenu}
        >
          <li>{NavBarConstants.contact}</li>
        </a>
      </ul>
    </section>
  );
}

export default HamburgerMenu;
