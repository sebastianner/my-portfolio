"use client";
import classNames from "classnames";
import { useContext, useEffect, useReducer, useRef } from "react";
import styles from "./HamburgerMenu.module.scss";
import { Context } from "@/context/context";
import type { NavItem } from "@/types/app";

type Props = {
  className?: string;
  color?: string;
  navItem: NavItem[];
};

type StackState = Record<string, boolean | undefined>;

function HamburgerMenu({ className, navItem, color = "#fff" }: Props) {
  const menuListRef = useRef<HTMLUListElement>(null);
  const { AppState, dispatchAppState } = useContext(Context);
  const isOpen = AppState.isHamburgerMenuOpen;
  const [stack, dispatchStack] = useReducer(
    (prev: StackState, next: Partial<StackState>) => {
      if (Object.keys(next).length === 0) {
        return {};
      }
      return { ...prev, ...next };
    },
    {}
  );

  const handleCloseMenu = () => {
    dispatchAppState({ isHamburgerMenuOpen: false });
  };

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    if (isOpen) {
      const stackLength = navItem.length;
      for (let index = 0; index < stackLength; index++) {
        const timeoutId = setTimeout(() => {
          const stackNumber = `stack${index}`;
          dispatchStack({ [stackNumber]: true });
        }, index * 200);
        timeouts.push(timeoutId);
      }
    } else {
      dispatchStack({});
    }
    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <section
      className={classNames(
        "left-full fixed z-4 md:hidden",
        "w-screen h-screen text-center",
        "flex flex-col justify-center",
        "font-semibold text-2xl",
        "bg-[#051C11DB]",
        styles.hamburgerMenu,
        { "left-0!": isOpen },
        className
      )}
      style={{ color: color }}
    >
      <ul className={classNames("flex flex-col gap-5")} ref={menuListRef}>
        {navItem.map((item, index) => {
          return (
            <li
              className={classNames(
                styles.fadeItem,
                { [styles.fadein]: stack[`stack${index}`] },
                {
                  "opacity-0 hidden": !isOpen,
                }
              )}
              key={item.name}
              onClick={handleCloseMenu}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default HamburgerMenu;
