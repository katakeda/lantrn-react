import React from 'react';
import { Facility } from '../../../types/common';

interface InfoProps {
  facility: Facility;
}

export const Info: React.FC<InfoProps> = ({ facility }) => {
  return (
    <div className="py-3 px-3">
      <p className="font-semibold text-3xl">{facility.facility_name}</p>
      <p className="font-medium text-base">{facility.recarea.recarea_name}</p>
      Info (Name, Park Name, Reviews, Save, Share)
    </div>
  );
}