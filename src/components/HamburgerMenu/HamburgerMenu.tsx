"use client";
import classNames from "classnames";
import { useEffect, useReducer, useRef, useState } from "react";
import styles from "./HamburgerMenu.module.scss";
import type { NavItem } from "@/types/app";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";

type Props = {
  className?: string;
  color?: string;
  navItem: NavItem[];
  isOpen: boolean;
};

type StackState = Record<string, boolean | undefined>;

function HamburgerMenu({ className, navItem, color = "#fff", isOpen }: Props) {
  const menuListRef = useRef<HTMLUListElement>(null);
  const [stack, dispatchStack] = useReducer(
    (prev: StackState, next: Partial<StackState>) => {
      if (Object.keys(next).length === 0) {
        return {};
      }
      return { ...prev, ...next };
    },
    {},
  );

  const handleCloseMenu = () => {};

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
    <>
      <section
        className={classNames(
          "left-full fixed z-4 md:hidden",
          "w-screen h-screen text-center",
          "flex flex-col justify-center",
          "font-semibold text-2xl",
          "bg-[#051C11DB]",
          styles.hamburgerMenu,
          { "left-0!": isOpen },
          className,
        )}
        style={{ color: color }}
      >
        <ul ref={menuListRef} className={classNames("flex flex-col gap-5")}>
          {navItem.map((item, index) => {
            return (
              <li
                key={item.name}
                className={classNames(
                  styles.fadeItem,
                  { [styles.fadein]: stack[`stack${index}`] },
                  {
                    "opacity-0 hidden": !isOpen,
                  },
                )}
                onClick={handleCloseMenu}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default HamburgerMenu;
