import React from 'react';
import { Facility } from '../../../types/common';
import { Reviews } from './Reviews';

interface InfoProps {
  facility: Facility;
}

export const Info: React.FC<InfoProps> = ({ facility }) => {
  return (
    <div className="py-3 px-3">
      <p className="font-semibold text-3xl text-gray-800">{facility.facility_name}</p>
      <p className="font-medium text-base text-gray-800">{facility.recarea.recarea_name}</p>
      <Reviews facility={facility} />
    </div>
  );
}