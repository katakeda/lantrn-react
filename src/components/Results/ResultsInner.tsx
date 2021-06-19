import React, { useState } from 'react';
import { Results } from '../../types/common';
import { ResultItem } from './ResultItem';
import { ResultMap } from './ResultMap';

interface ResultsInnerProps {
  results: Results;
}

export const ResultsInner: React.FC<ResultsInnerProps> = ({ results }) => {
  const [focused, setFocused] = useState<string>('');

  return (
    <section className="flex">
      <div className="flex flex-col space-y-6 md:h-noheader md:overflow-y-scroll md:grid md:grid-cols-2 md:w-3/5 lg:w-1/2">
        {results.campgrounds.map((campground) => {
          return (
            <div key={campground.facility.facility_id} className="p-2 border-b-2 border-gray-100">
              <ResultItem campground={campground} state={{ focused, setFocused }} />
            </div>
          )
        })}
      </div>
      <div className="md:h-noheader md:flex md:w-2/5 lg:w-1/2 hidden"><ResultMap campgrounds={results.campgrounds} state={{ focused, setFocused }} /></div>
    </section>
  );
}