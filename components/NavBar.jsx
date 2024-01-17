'use client';
import React from 'react';
import Link from 'next/link';
import { DarkThemeToggle } from 'flowbite-react';
import { Navbar } from 'flowbite-react';


function NavBar() {
  return (
    <Navbar className=' bg-white dark:bg-slate-800' >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-bold transition-colors duration-300 ease-in-out hover:text-gray-300">
          <span className="light:text-gray-800 dark:text-white">/home</span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/dev" className="transition-colors duration-300 ease-in-out text-white hover:text-gray-300">
            <span className="text-2xl font-bold text-gray-800 dark:text-white mb-4">/dev</span>
          </Link>
          <Link href="/ctf" className="transition-colors duration-300 ease-in-out text-white hover:text-gray-300">
            <span className="text-2xl font-bold text-gray-800 dark:text-white mb-4">/ctf</span>
          </Link>
          <Link href="/blog" className="transition-colors duration-300 ease-in-out text-white hover:text-gray-300">
            <span className="text-2xl font-bold text-gray-800 dark:text-white mb-4">/blog</span>
          </Link>
        </div>
        <DarkThemeToggle />
      </div>
    </Navbar>
  );
}

export default NavBar;
