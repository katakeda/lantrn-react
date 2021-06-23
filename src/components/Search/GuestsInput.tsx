import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/solid';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/outline';
import { SearchFormItem } from './SearchFormItem';
import { useSearchContext } from '../../contexts/SearchContext';

interface GuestsInputProps {

}

interface MenuInputProps {
  label: string;
  guests: number;
  update: (change: number) => void;
}

const MenuItem: React.FC<MenuInputProps> = ({ label, guests, update }) => {
  return (
    <div className="py-1 flex flex-row justify-between">
      <span className="text-gray-700 block px-4 py-2 text-sm">{label}</span>
      <span className="flex flex-row justify-center items-center px-4 py-2">
        <button className="h-6 w-6 mr-2 focus:outline-none active:text-gray-400" onClick={() => update(-1)}><MinusCircleIcon /></button>
        <span>{guests}</span>
        <button className="h-6 w-6 ml-2 focus:outline-none active:text-gray-400" onClick={() => update(1)}><PlusCircleIcon /></button>
      </span>
    </div>
  );
}

export const GuestsInput: React.FC<GuestsInputProps> = () => {
  const { formData, setGuests } = useSearchContext();

  const updateAdults = (change: number): void => {
    const adults = Math.max(0, formData.adults + (change));
    setGuests({ adults });
  }

  const updateChildren = (change: number): void => {
    const children = Math.max(0, formData.children + (change));
    setGuests({ children })
  }

  return (
    <SearchFormItem label={'Guests'} Icon={UserIcon}>
      <Menu as="div" className="pl-2">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md py-2 text-gray-400 focus:outline-none whitespace-nowrap">
                {formData.adults + formData.children > 0
                  ? `${formData.adults + formData.children} Guests`
                  : 'Add Guests'}
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
                static
                className="absolute mx-auto mt-2 rounded-md shadow-lg bg-white focus:outline-none"
              >
                <MenuItem label={'Adults'} guests={formData.adults} update={updateAdults} />
                <MenuItem label={'Children'} guests={formData.children} update={updateChildren} />
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </SearchFormItem>
  );
}