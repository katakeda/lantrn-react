import React from 'react';
import googleImg from '../../assets/imgs/google.svg';

interface GoogleBtnProps {

}

export const GoogleBtn: React.FC<GoogleBtnProps> = ({ }) => {
  return (
    <a href="/" className="flex justify-center px-4 border-2 border-black hover:shadow-xl rounded-lg bg-white">
      <img className="mr-2 h-12 w-12" src={googleImg} alt="Google" />
      <span className="whitespace-nowrap my-auto text-center text-gray-500 text-base font-robo font-medium">Sign in with Google</span>
    </a>
  );
}