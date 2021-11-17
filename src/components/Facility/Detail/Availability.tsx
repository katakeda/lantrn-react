import React from 'react';
import { Facility } from '../../../types/common';

interface AvailabilityProps {
  facility: Facility;
  state: { showCalendar: boolean, setShowCalendar: React.Dispatch<React.SetStateAction<boolean>> };
}

export const Availability: React.FC<AvailabilityProps> = ({ facility, state }) => {
  const toggleCalendar = () => state.setShowCalendar((prev) => !prev);

  return (
    <div className="fixed w-full h-16 z-50 inset-x-0 bottom-0 py-3 px-3 flex items-center justify-center bg-white">
      <button className="w-full rounded-md py-3 text-gray-800 border-2 border-green-600 focus:outline-none whitespace-nowrap" onClick={toggleCalendar}>
        Check Availability
      </button>
    </div>
  );
}