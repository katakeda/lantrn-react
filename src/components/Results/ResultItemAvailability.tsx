import React, { useEffect, useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import moment from 'moment';

import { Campground } from '../../types/common';

interface ResultItemAvailabilityProps {
  campground: Campground;
}

export const ResultItemAvailability: React.FC<ResultItemAvailabilityProps> = ({ campground }) => {
  const [availableDates, setAvailableDates] = useState<Set<Date>>(new Set());

  const initAvailabilities = () => {
    let tmp: Array<Date> = [];
    for (const key in campground.sites) {
      const dates = campground.sites[key];
      tmp = [...tmp, ...dates]
    }
    setAvailableDates(new Set(tmp));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(initAvailabilities, [])

  return (
    <div>
      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md py-2 text-gray-800 ring-2 focus:outline-none whitespace-nowrap">
                Check Availability
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute inset-x-0 z-50 mt-2 text-center rounded-md shadow-lg ring-4 ring-gray-500 bg-white focus:outline-none"
              >
                {Array.from(availableDates).map((date, key) => (
                  <div key={key} className="py-3 shadow-sm cursor-pointer hover:shadow-lg">
                    <span>{moment(date).utc().format('M/D/Y')} ({moment(date).utc().format('ddd')})</span>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}