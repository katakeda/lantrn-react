import React, { useEffect, useRef } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { SearchFormItem } from './SearchFormItem';
import { useSearchContext } from '../../contexts/SearchContext';

interface LocationInputProps {

}

let autocomplete: any;

export const LocationInput: React.FC<LocationInputProps> = () => {
  const { setLocation } = useSearchContext();
  const autoCompleteRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handlePlaceChange = () => {
    const { geometry } = autocomplete.getPlace();
    const lat = geometry.location.lat();
    const lng = geometry.location.lng();
    setLocation(lat, lng);
  }

  useEffect(() => {
    const options = {
      componentRestrictions: { country: 'us' },
      fields: ['place_id', 'formatted_address', 'address_components', 'geometry', 'name'],
      types: ['geocode'],
    }
    autocomplete = new google.maps.places.Autocomplete(autoCompleteRef.current, options);
    autocomplete.addListener('place_changed', handlePlaceChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SearchFormItem label={'Where To?'} Icon={SearchIcon}>
      <input className="pl-2 focus:outline-none bg-transparent" type="text" ref={autoCompleteRef} />
    </SearchFormItem>
  );
}