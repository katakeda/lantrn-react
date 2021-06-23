import React from 'react';
import { SearchIcon } from '@heroicons/react/outline'
import { DatePickerInput } from './DatePickerInput';
import { GuestsInput } from './GuestsInput';
import { LocationInput } from './LocationInput';
import { useSearchContext } from '../../contexts/SearchContext';

interface SearchFormProps {

}

export const SearchForm: React.FC<SearchFormProps> = () => {
  const { submitForm } = useSearchContext();

  return (
    <section className="px-5 flex flex-col md:flex-row md:flex-wrap md:space-x-10 justify-around">
      <LocationInput />
      <DatePickerInput />
      <GuestsInput />
      <span className="flex flex-col justify-between py-3 md:flex-grow">
        <span></span>
        <button className="py-2 px-3 flex justify-center items-center bg-green-600 text-green-50 rounded-full focus:outline-none active:bg-green-700" onClick={submitForm}>
          <SearchIcon className="h-5 mr-1" />
          <span className="">Search</span>
        </button>
      </span>
    </section>
  );
}