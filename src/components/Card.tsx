import React from 'react';
import { classNames } from '../utils/common';

interface CardProps {
  img: string;
  label: string;
  description: string;
  color: string;
}

export const Card: React.FC<CardProps> = ({ img, label, description, color }) => {
  return (
    <div className={classNames("py-5 px-3 bg-white shadow-lg rounded-md divide-y-2 ring-4", `ring-${color}-300`)}>
      <img src={img} alt={label} className="py-8 h-64 w-64 mx-auto" />
      <section className="py-5 px-3 text-center font-semibold text-gray-600">
        <article>{description}</article>
      </section>
    </div>
  );
}