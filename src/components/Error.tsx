import React from 'react';

interface ErrorProps {

}

export const Error: React.FC<ErrorProps> = ({}) => {
  return (
    <div className="flex h-noheader">
      <div className="m-auto">
        <p className="font-bold text-9xl text-gray-700">SORRY</p>
        <p className="font-bold text-2xl text-gray-700">Something went wrong. Please go back and try again or go to <a className="text-indigo-400" href="/">home</a></p>
      </div>
    </div>
  );
}