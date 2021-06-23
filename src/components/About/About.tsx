import React from 'react';

interface AboutProps {

}

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex h-noheader">
      <article className="flex flex-col px-3 m-auto font-sans text-center">
        <span className="font-bold text-7xl text-gray-900">About Us</span>
        <span className="text-2xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo error nostrum itaque doloribus vitae nihil debitis doloremque perspiciatis porro ut molestiae eos autem, voluptate similique repellat rerum placeat sint.</span>
      </article>
    </div>
  );
}