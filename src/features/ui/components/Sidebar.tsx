'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AlignJustify } from 'lucide-react';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <nav className="sticky top-0 flex flex-row items-center justify-between border-b border-slate-700 bg-slate-950/10 p-10 text-slate-200 backdrop-blur">
        <h1 className="cursor-pointer text-4xl font-extrabold">Profile</h1>
        <button
          className="block rounded-md p-2 transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110 hover:bg-slate-700 md:hidden"
          onClick={toggleMenu}
        >
          <AlignJustify />
        </button>
        <ul className="hidden gap-5 text-xl font-bold md:flex">
          <li className="transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110">
            <Link href="/" className="hover:text-slate-300">
              About
            </Link>
          </li>
          <li className="transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110">
            <Link href="/" className="hover:text-slate-300">
              Study
            </Link>
          </li>
          <li className="transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110">
            <Link href="/" className="hover:text-slate-300">
              Work
            </Link>
          </li>
          <li className="transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110">
            <Link href="/" className="hover:text-slate-300">
              DarkMode
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile */}
      <nav
        className={`fixed w-full border-r border-slate-700 bg-slate-950/10 p-6 text-slate-200 shadow-lg backdrop-blur md:hidden ${menuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col items-center justify-center gap-5 text-lg">
          <li className="transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110">
            <Link href="/" className="hover:text-slate-300">
              About
            </Link>
          </li>
          <li className="transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110">
            <Link href="/" className="hover:text-slate-300">
              Study
            </Link>
          </li>
          <li className="transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110">
            <Link href="/" className="hover:text-slate-300">
              Work
            </Link>
          </li>
          <li className="transition delay-150 ease-in-out hover:-translate-y-0 hover:scale-110">
            <Link href="/" className="hover:text-slate-300">
              DarkMode
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
