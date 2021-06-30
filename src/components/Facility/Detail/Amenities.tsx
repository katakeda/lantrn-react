import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faFire, faCampground } from '@fortawesome/free-solid-svg-icons'
import { Facility } from '../../../types/common';

interface AmenitiesProps {
  facility: Facility;
}

export const Amenities: React.FC<AmenitiesProps> = ({ facility }) => {
  return (
    <div className="px-3 py-3">
      <div className="py-3 px-3 shadow-lg rounded-md">
        <p className="px-2 text-lg text-gray-600">Amenities</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2">
            <FontAwesomeIcon icon={faPaw} />
            <span className="ml-2">Pets Allowed</span>
          </div>
          <div className="p-2">
            <FontAwesomeIcon icon={faCampground} />
            <span className="ml-2">Tents Allowed</span>
          </div>
          <div className="p-2">
            <FontAwesomeIcon icon={faFire} />
            <span className="ml-2">Campfire Allowed</span>
          </div>
        </div>
      </div>
    </div>
  );
}