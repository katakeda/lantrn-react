import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Error } from './Error';
import { Loading } from './Loading';

interface MainProps {

}

export const Main: React.FC<MainProps> = ({ children }) => {
  const { loading, error } = useAppContext();

  return error
    ? <Error /> : loading
    ? <Loading /> : (<>{children}</>);
}