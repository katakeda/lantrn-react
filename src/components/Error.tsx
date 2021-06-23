import React from 'react';
import { Link } from './Extensions/Link';

interface ErrorProps {

}

export const Error: React.FC<ErrorProps> = () => {
  return (
    <div className="flex h-noheader">
      <div className="m-auto">
        <p className="font-bold text-9xl text-gray-700">SORRY</p>
        <p className="font-bold text-2xl text-gray-700">Something went wrong. Please go back and try again or go to <Link className="text-indigo-400" to="/">home</Link></p>
      </div>
    </div>
  );
}