import Link from "next/link";

type Props = {};

function NavBar({}: Props) {
  return (
    <nav className="bg-transparent w-screen h-20 flex items-center justify-between px-14 py-8 shadow-sm shadow-black font-semibold text-lg absolute">
      Sebastian.dev
      <ul className="flex gap-4">
        <Link href={""}>
          <li>Home</li>
        </Link>
        <Link href={""}>
          <li>About me</li>
        </Link>
        <Link href={""}>
          <li>Work</li>
        </Link>
        <Link href={""}>
          <li>Projects</li>
        </Link>
        <Link href={""}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
