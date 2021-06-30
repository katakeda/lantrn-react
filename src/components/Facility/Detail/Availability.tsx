import React from 'react';
import { Facility } from '../../../types/common';

interface AvailabilityProps {
  facility: Facility;
}

export const Availability: React.FC<AvailabilityProps> = ({ facility }) => {
  return (
    <div className="fixed w-full h-16 z-50 inset-x-0 bottom-0 py-3 px-3 flex items-center justify-center bg-white">
      <button className="w-full rounded-md py-3 text-gray-800 ring-2 focus:outline-none whitespace-nowrap">
        Check Availability
      </button>
    </div>
  );
}