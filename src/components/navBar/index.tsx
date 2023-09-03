type Props = {};

function NavBar({}: Props) {
  return (
    <nav className="bg-transparent w-screen h-20 flex items-center justify-between px-14 py-8 shadow-sm font-semibold text-lg absolute">
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
  );
}

export default NavBar;
