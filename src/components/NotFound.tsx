import React from 'react';

interface NotFoundProps {

}

export const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <div className="flex h-noheader">
      <div className="m-auto">
        <p className="font-bold text-9xl text-gray-700">SORRY</p>
        <p className="font-bold text-2xl text-gray-700">We couldn't find that page. Please go back and try again or go to <a className="text-indigo-400" href="/">home</a></p>
      </div>
    </div>
  );
}