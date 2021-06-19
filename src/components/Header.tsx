import React from 'react';
import { Navbar } from './Navbar';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Navbar />
    </header>
  );
}