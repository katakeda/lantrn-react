import React from 'react';
import { useLocation } from 'react-router';
import { ResultsInner } from './ResultsInner';
import { ResultsNotFound } from './ResultsNotFound';
import { Results as ResultsInterface } from '../../types/common';
interface ResultsProps {

}

export const Results: React.FC<ResultsProps> = ({ }) => {
  const location = useLocation();
  const results = location.state as ResultsInterface;

  return !results
    ? <ResultsNotFound />
    : <ResultsInner results={results} />
}