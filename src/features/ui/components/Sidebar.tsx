'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AlignJustify } from 'lucide-react';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-50 flex flex-row items-center justify-between border-b border-slate-700 bg-slate-950/10 p-10 text-slate-200 backdrop-blur">
        <h1 className="cursor-pointer text-4xl font-extrabold">Profile</h1>
        <button
          aria-label="Toggle Menu"
          className="block transform rounded-md p-2 transition hover:scale-110 hover:bg-slate-700 md:hidden"
          onClick={toggleMenu}
        >
          <AlignJustify />
        </button>
        <ul className="hidden gap-5 text-xl font-bold md:flex">
          <li className="transform transition hover:scale-110 hover:text-slate-300">
            <Link href="/" aria-label="About Page">
              About
            </Link>
          </li>
          <li className="transform transition hover:scale-110 hover:text-slate-300">
            <Link href="/" aria-label="Skills Page">
              Skills
            </Link>
          </li>
          <li className="transform transition hover:scale-110 hover:text-slate-300">
            <Link href="/" aria-label="Education Page">
              Education
            </Link>
          </li>
          <li className="transform transition hover:scale-110 hover:text-slate-300">
            <Link href="/" aria-label="Experience Page">
              Experience
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`fixed z-50 w-full border-r border-slate-700 bg-slate-950/10 p-6 text-slate-200 shadow-lg backdrop-blur transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col items-center justify-center gap-5 text-lg">
          <li className="transform transition hover:scale-110 hover:text-slate-300">
            <Link href="/" aria-label="About Page">
              About
            </Link>
          </li>
          <li className="transform transition hover:scale-110 hover:text-slate-300">
            <Link href="/" aria-label="Skills Page">
              Skills
            </Link>
          </li>
          <li className="transform transition hover:scale-110 hover:text-slate-300">
            <Link href="/" aria-label="Education Page">
              Education
            </Link>
          </li>
          <li className="transform transition hover:scale-110 hover:text-slate-300">
            <Link href="/" aria-label="Experience Page">
              Experience
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
