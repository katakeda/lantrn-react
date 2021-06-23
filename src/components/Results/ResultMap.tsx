import React, { useEffect, useRef, useState } from 'react';
import { Campground } from '../../types/common';

interface ResultMapProps {
  campgrounds: Array<Campground>;
  state: { focused: string, setFocused: React.Dispatch<React.SetStateAction<string>> };
}

interface MarkerObject {
  marker: google.maps.Marker;
  infoWindow: google.maps.InfoWindow;
}

export const ResultMap: React.FC<ResultMapProps> = ({ campgrounds, state }) => {
  const mapDivRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [mapState, setMapState] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<Map<string, MarkerObject>>(new Map());

  const initMap = (): void => {
    const center = {
      lat: campgrounds[0].facility.facility_latitude,
      lng: campgrounds[0].facility.facility_longitude
    }

    const map = new google.maps.Map(mapDivRef.current as HTMLElement, { zoom: 10, center });

    const markersMap = new Map();

    campgrounds.forEach(({ facility }) => {
      const position = { lat: facility.facility_latitude, lng: facility.facility_longitude };
      const marker = new google.maps.Marker({ position, map });
      const content = `<div>${facility.facility_name}</div>`;
      const infoWindow = new google.maps.InfoWindow({ content });
      markersMap.set(facility.facility_id, { marker, infoWindow });
    })

    setMapState(map);
    setMarkers(markersMap);
  }

  const toggleInfoWindow = (): void => {
    if (state.focused === '') {
      Array.from(markers).forEach(([_, { infoWindow }]) => {
        infoWindow.close();
      })
    } else {
      markers.get(state.focused)?.infoWindow.open(mapState, markers.get(state.focused)?.marker);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(initMap, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(toggleInfoWindow, [state.focused])

  return (
    <>
      <div className="w-full h-full" ref={mapDivRef}></div>
    </>
  );
}