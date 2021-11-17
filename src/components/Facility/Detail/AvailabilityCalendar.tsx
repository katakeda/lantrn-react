import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Facility } from '../../../types/common';

interface AvailabilityCalendarProps {
  facility: Facility;
  state: { showCalendar: boolean, setShowCalendar: React.Dispatch<React.SetStateAction<boolean>> };
}

export const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({ facility, state }) => {
  const toggleCalendar = async () => state.setShowCalendar((prev) => !prev);

  return (
    <Transition
      show={state.showCalendar}
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="transform translate-y-full"
      enterTo="transform translate-y-0"
      leave="transition ease-in duration-300"
      leaveFrom="transform translate-y-0"
      leaveTo="transform translate-y-full"
    >
      <div className="absolute inset-0 w-full h-screen bg-white z-50 overflow-y-scroll">
        <div className="flex justify-end p-3">
          <button className="rounded-full h-10 w-10 border-2 text-gray-600 focus:" onClick={toggleCalendar}>X</button>
        </div>
        <div className="flex flex-col">
          
        </div>
      </div>
    </Transition>
  );
}