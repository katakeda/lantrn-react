import React from 'react';
import { SearchProvider } from '../../contexts/SearchContext';
import { SearchForm } from './SearchForm';

interface SearchProps {

}

export const Search: React.FC<SearchProps> = () => {
  return (
    <SearchProvider>
      <section className="py-5 px-3 mx-3 bg-white shadow-lg rounded-md md:rounded-full">
        <SearchForm />
      </section>
    </SearchProvider>
  );
}