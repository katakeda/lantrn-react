import React, { useState } from 'react';
import { MenuIcon, ChevronRightIcon } from '@heroicons/react/outline';
import logo from '../assets/imgs/logo.svg';
import { useAuthContext } from '../contexts/AuthContext';
import { Link } from './Extensions/Link';

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user, logout } = useAuthContext();

  const toggleMenu = () => setMobileMenu((prev) => !prev);

  const handleLogout = () => logout();

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
            <Link to="/" className="flex items-center space-x-2 py-5 px-2 text-l">
              <img className="h-8 w-8" src={logo} alt="logo" />
              <span className="font-mono font-bold text-xl text-gray-500">LΛNTRN</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/about" className="py-5 px-3">About</Link>
            {user
              ? <><span className="py-5 px-3 cursor-pointer" onClick={handleLogout}>Log out</span></>
              : <>
                <Link to="/login" className="py-5 px-3">Log in</Link>
                <Link to="/signup" className="py-2 px-3 border-2 border-green-600 bg-green-600 text-white hover:bg-green-50 hover:text-green-600 rounded-full transform duration-500">Sign up</Link>
              </>
            }
          </div>
          <div className="md:hidden"></div>
        </div>
      </div>
      {mobileMenu && (
        <div className="md:hidden">
          <Link to="/about" className="flex justify-between py-5 px-3">
            <span>About</span>
            <ChevronRightIcon className="h-6 w-6" />
          </Link>
          {user
            ? <><div className="flex justify-between py-5 px-3 cursor-pointer" onClick={handleLogout}><span>Log out</span><ChevronRightIcon className="h-6 w-6" /></div></>
            : <>
              <Link to="/login" className="flex justify-between py-5 px-3">
                <span>Log in</span>
                <ChevronRightIcon className="h-6 w-6" />
              </Link>
              <Link to="/signup" className="flex justify-between py-5 px-3">
                <span>Sign up</span>
                <ChevronRightIcon className="h-6 w-6" />
              </Link>
            </>
          }
        </div>
      )}
    </nav>
  );
}