import React from 'react';
import { Campground } from '../../types/common';
import { ResultItemAvailability } from './ResultItemAvailability';
import { ResultItemDescription } from './ResultItemDescription';
import { ResultItemImages } from './ResultItemImages';

interface ResultItemProps {
  campground: Campground;
  state: { focused: string, setFocused: React.Dispatch<React.SetStateAction<string>> };
}

export const ResultItem: React.FC<ResultItemProps> = ({ campground, state }) => {
  const handleMouseEnter = (): void => {
    state.setFocused(campground.facility.facility_id);
  }

  const handleMouseLeave = (): void => {
    state.setFocused('');
  }

  return (
    <div className="flex flex-col" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="h-2/4"><ResultItemImages campground={campground} /></div>
      <div className="h-1/4 px-1 py-2"><ResultItemDescription campground={campground} /></div>
      <div className="h-1/4 px-1 py-2"><ResultItemAvailability campground={campground} /></div>
    </div>
  );
}