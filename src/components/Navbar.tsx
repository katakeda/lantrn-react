import React, { useState } from 'react';
import { MenuIcon, ChevronRightIcon } from '@heroicons/react/outline';
import logo from '../assets/imgs/logo.svg';

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({ }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => setMobileMenu((prev) => !prev);

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex md:hidden items-center">
            <button className="focus:outline-none" onClick={toggleMenu}>
              <MenuIcon className="h6 w-6" />
            </button>
          </div>
          <div className="md:flex md:space-x-4">
            <a href="/" className="flex items-center space-x-2 py-5 px-2 text-l">
              <img className="h-8 w-8" src={logo} alt="logo" />
              <span className="font-mono font-bold text-xl text-gray-500">LΛNTRN</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="/about" className="py-5 px-3">About</a>
            <a href="/login" className="py-5 px-3">Log in</a>
            <a href="/signup" className="py-2 px-3 border-2 border-green-600 bg-green-600 text-white hover:bg-green-50 hover:text-green-600 rounded-full transform duration-500">Sign up</a>
          </div>
          <div className="md:hidden"></div>
        </div>
      </div>
      {mobileMenu && (
        <div className="mobile-menu md:hidden">
          <div className="flex justify-between py-5 px-3">
            <a href="/about">About</a>
            <ChevronRightIcon className="h-6 w-6" />
          </div>
          <div className="flex justify-between py-5 px-3">
            <a href="/login" className="">Log in</a>
            <ChevronRightIcon className="h-6 w-6" />
          </div>
          <div className="flex justify-between py-5 px-3">
            <a href="/signup">Sign up</a>
            <ChevronRightIcon className="h-6 w-6" />
          </div>
        </div>
      )}
    </nav>
  );
}