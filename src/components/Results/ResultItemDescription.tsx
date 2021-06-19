import React from 'react';
import { Campground } from '../../types/common';

interface ResultItemDescriptionProps {
  campground: Campground;
}

export const ResultItemDescription: React.FC<ResultItemDescriptionProps> = ({ campground }) => {
  return (
    <>
      <span className="font-semibold text-base">{campground.facility.facility_name}</span>
    </>
  );
}