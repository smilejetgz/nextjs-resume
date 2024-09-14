'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 rounded-lg bg-gray-900 p-2 text-2xl text-white hover:bg-gray-700 md:hidden"
      >
        <Menu />
      </button>

      {/* Desktop */}
      <nav className="sticky top-0 hidden h-screen w-60 flex-col items-start justify-center gap-6 bg-gray-900 p-6 text-white shadow-lg md:flex">
        <Link
          href="/"
          className="text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Personal
        </Link>
        <Link
          href="education"
          className="text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Education
        </Link>
        <Link
          href="skills"
          className="text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Skills
        </Link>
        <Link
          href="experience"
          className="text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Experience
        </Link>
        <Link
          href="portfolio"
          className="text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Portfolio
        </Link>
      </nav>

      {/* Mobile */}
      <nav
        className={`fixed left-0 top-0 h-screen w-64 bg-gray-900 p-6 pt-14 text-white shadow-lg md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-2xl"
        >
          &times;
        </button>
        <Link
          href="/"
          className="mb-4 block text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Personal
        </Link>
        <Link
          href="education"
          className="mb-4 block text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Education
        </Link>
        <Link
          href="skills"
          className="mb-4 block text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Skills
        </Link>
        <Link
          href="experience"
          className="mb-4 block text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Experience
        </Link>
        <Link
          href="portfolio"
          className="block text-lg font-medium transition duration-300 hover:text-gray-400 hover:underline"
        >
          Portfolio
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
