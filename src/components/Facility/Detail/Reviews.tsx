import React from 'react';
import { Facility, Review } from '../../../types/common';
import { classNames } from '../../../utils/common';

interface ReviewsProps {
  facility: Facility;
}

export const Reviews: React.FC<ReviewsProps> = ({ facility }) => {
  const reviewTotal = facility.reviews.length;
  const reviewAvg = reviewTotal > 0 ? facility.reviews.reduce((prev: number, curr: Review) => prev + curr.rating, 0) / reviewTotal : 0;
  const reviewAvgPercentage = Math.floor((reviewAvg / 5) * 12)

  return (
    <div className="flex">
      <div className="flex w-28">
        <div className="flex w-full bg-clip-text bg-gray-200">
          <div className={classNames("flex gap-x-1 bg-clip-text bg-yellow-300 text-transparent text-lg", reviewAvgPercentage > 0 ? `w-${reviewAvgPercentage}/12` : "w-0")}>
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
          </div>
        </div>
      </div>
      <span className="pt-1 ml-1">({reviewTotal})</span>
    </div>
  );
}