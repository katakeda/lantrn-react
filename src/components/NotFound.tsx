import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundProps {

}

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="flex h-noheader">
      <div className="m-auto">
        <p className="font-bold text-9xl text-gray-700">SORRY</p>
        <p className="font-bold text-2xl text-gray-700">We couldn't find that page. Please go back and try again or go to <Link className="text-indigo-400" to="/">home</Link></p>
      </div>
    </div>
  );
}