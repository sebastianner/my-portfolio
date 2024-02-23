import classNames from "classnames";
import { NavBarConstants } from "./constants";

function NavBar() {
  return (
    <header className="sticky top-0">
      <nav
        className={classNames(
          "bg-transparent shadow-sm",
          "w-screen h-20 px-14 py-8",
          "flex items-center justify-between",
          "font-semibold text-lg"
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
            <li>{NavBarConstants.work}</li>
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
