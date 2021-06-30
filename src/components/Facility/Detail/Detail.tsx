import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../../contexts/AppContext';
import { asyncRequest } from '../../../utils/common';
import { Facility_DETAIL_API_ENDPOINT } from '../../../utils/constants';
import { FacilityDetailUrlParams, Facility } from '../../../types/common';
import { Amenities } from './Amenities';
import { Availability } from './Availability';
import { Description } from './Description';
import { Images } from './Images';
import { Info } from './Info';
import { Map } from './Map';

interface DetailProps {

}

export const Detail: React.FC<DetailProps> = () => {
  const { toggleError } = useAppContext();
  const { id } = useParams<FacilityDetailUrlParams>();
  const [facility, setFacility] = useState<Facility>({} as Facility);

  useEffect(() => {
    getFacility({ facility_id: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getFacility = ({ facility_id }: { facility_id: string }) => {
    const handler = (results: any) => {
      if (results.status) {
        setFacility(results.facility);
      } else {
        toggleError(results.message);
      }
    }

    const errorHandler = (error: any) => {
      toggleError(error);
    }

    asyncRequest<void>({
      url: Facility_DETAIL_API_ENDPOINT,
      body: JSON.stringify({ facility_id }),
      handler,
      errorHandler,
    })
  }

  return facility.facility_id ? (
    <div>
      <div>
        <section><Images facility={facility} /></section>
        <section><Info facility={facility} /></section>
        <section><Description facility={facility} /></section>
        <section><Amenities facility={facility} /></section>
        <section><Map facility={facility} /></section>
      </div>
      <div>
        <section><Availability facility={facility} /></section>
      </div>
    </div>
  ) : <></>;
}