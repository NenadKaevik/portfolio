"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClickOutside } from "primereact/hooks";
import { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./Logo";

const HeaderItem = ({ name, href, active }: any) => {
  return (
    <li>
      <Link
        href={href}
        className={`block py-2 px-3 font-medium text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ${
          active ? "dark:text-blue-500" : "dark:text-white"
        } md:dark:hover:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white md:dark:hover:bg-transparent`}
        aria-current="page"
      >
        {name}
      </Link>
    </li>
  );
};

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const overlayRef: any = useRef(null);

  useClickOutside(overlayRef, () => {
    setVisible(false);
  });

  return (
    <nav>
      <div className="w-full flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-bold m-0">
          <Logo />
        </Link>
        <button
          onClick={() => setVisible(!visible)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 text-xl justify-center text-black rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-gray-300 dark:text-white dark:focus:ring-gray-800"
        >
          <FiMenu />
        </button>
        <div
          className={`${
            visible ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          ref={overlayRef}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-300 rounded-3xl bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-black md:dark:bg-black dark:border-gray-800">
            <HeaderItem active={pathname === "/"} name="About" href="/" />
            <HeaderItem
              active={pathname === "/career"}
              name="Career"
              href="/career"
            />
            {/* <HeaderItem
              active={pathname === "/projects"}
              name="Projects"
              href="/projects"
            /> */}
            <HeaderItem
              active={pathname === "/photography"}
              name="Photography"
              href="https://unsplash.com/@nenadkaevik"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};
