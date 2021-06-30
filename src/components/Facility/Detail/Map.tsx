import React, { useEffect, useRef } from 'react';
import { Facility } from '../../../types/common';

interface MapProps {
  facility: Facility;
}

export const Map: React.FC<MapProps> = ({ facility }) => {
  const mapDivRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const initMap = (): void => {
    const center = {
      lat: facility.facility_latitude,
      lng: facility.facility_longitude
    }

    const map = new google.maps.Map(mapDivRef.current as HTMLElement, { zoom: 10, center });

    const position = { lat: facility.facility_latitude, lng: facility.facility_longitude };
    const marker = new google.maps.Marker({ position, map });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { initMap() }, []);

  return (
    <div className="py-3 px-3 h-96 flex rounded-md">
      <div className="w-full h-full rounded-md" ref={mapDivRef}></div>
    </div>
  );
}