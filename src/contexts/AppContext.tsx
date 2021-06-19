import React, { useContext, createContext, useState } from 'react';

interface AppData {
  title: string;
  loading: boolean;
  error: string | null;
  toggleLoading: (flag: boolean) => void;
  toggleError: (error: any) => void;
}

const AppContext: React.Context<AppData> = createContext({} as AppData);

export const AppProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const toggleLoading = (flag: boolean): void => setLoading(flag);

  const toggleError = (error: any): void => setError(error);

  const data = {
    title: 'Lantrn',
    loading, toggleLoading,
    error, toggleError,
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);