import React, { useContext, createContext, useState } from 'react'
import { useHistory } from 'react-router';
import { DateRange } from '../types/common';
import { asyncRequest } from '../utils/common';
import { SEARCH_API_ENDPOINT } from '../utils/constants';
import { useAppContext } from './AppContext';

interface Guests {
  adults?: number;
  children?: number;
}

interface SearchData {
  formData: FormData;
  setLocation: (latitude: number, longitude: number) => void;
  setDates: (dates: DateRange) => void;
  setGuests: (guests: Guests) => void;
  submitForm: () => void;
}

interface FormData {
  latitude: number;
  longitude: number;
  dates: DateRange;
  adults: number;
  children: number;
}

const SearchContext: React.Context<SearchData> = createContext({} as SearchData);

export const SearchProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const { toggleLoading, toggleError } = useAppContext();
  const [formData, setFormData] = useState<FormData>({ adults: 0, children: 0 } as FormData);

  const setLocation = (latitude: number, longitude: number): void => {
    setFormData((prev) => ({ ...prev, latitude, longitude }));
  }

  const setDates = (dates: DateRange): void => {
    setFormData((prev) => ({ ...prev, dates }));
  }

  const setGuests = ({ adults, children }: Guests): void => {
    if (adults !== undefined) {
      setFormData((prev) => ({ ...prev, adults }));
    }

    if (children !== undefined) {
      setFormData((prev) => ({ ...prev, children }));
    }
  }

  const submitForm = (): void => {
    toggleLoading(true);

    const handler = (results: any): void => {
      console.log({ results });
      history.push('/results', results);
      toggleLoading(false);
    }

    const errorHandler = (error: any): void => {
      toggleError(error);
    }

    asyncRequest<void>({
      url: SEARCH_API_ENDPOINT,
      body: JSON.stringify(formData),
      handler,
      errorHandler,
    })
  }

  const data: SearchData = {
    formData, setLocation, setDates, setGuests, submitForm,
  }

  return (
    <SearchContext.Provider value={data}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext);