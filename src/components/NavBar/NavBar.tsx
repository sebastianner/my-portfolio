import classNames from "classnames";

function NavBar() {
  return (
    <header>
      <nav
        className={classNames(
          "bg-transparent shadow-sm",
          "absolute w-screen h-20 px-14 py-8",
          "flex items-center justify-between",
          "font-semibold text-lg"
        )}
      >
        Sebastian.dev
        <ul className="gap-4 hidden md:flex">
          <a href={""}>
            <li>Home</li>
          </a>
          <a href={"#about"}>
            <li>About me</li>
          </a>
          <a href={""}>
            <li>Work</li>
          </a>
          <a href={""}>
            <li>Projects</li>
          </a>
          <a href={""}>
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
