import React from 'react';
import { Link } from 'react-router-dom';
import { Campground } from '../../types/common';

interface ResultItemDescriptionProps {
  campground: Campground;
}

export const ResultItemDescription: React.FC<ResultItemDescriptionProps> = ({ campground }) => {
  return (
    <>
      <Link className="font-semibold text-base text-blue-400" to={`/facility/detail/${campground.facility.facility_id}`}>{campground.facility.facility_name}</Link>
    </>
  );
}