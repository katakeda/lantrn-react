import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../../contexts/AppContext';
import { asyncRequest, classNames } from '../../../utils/common';
import { FACILITY_AVAILABILITY_API_ENDPOINT, FACILITY_DETAIL_API_ENDPOINT } from '../../../utils/constants';
import { FacilityDetailUrlParams, Facility } from '../../../types/common';
import { Amenities } from './Amenities';
import { AvailabilityCalendar } from './AvailabilityCalendar';
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
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

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
      url: FACILITY_DETAIL_API_ENDPOINT,
      body: JSON.stringify({ facility_id }),
      handler,
      errorHandler,
    })
  }

  const getFacilityAvailability = ({ facility_id, date }: { facility_id: string, date: Date }): Promise<void | Array<string>> => {
    const handler = (results: any): Array<string> => {
      if (results.status) {
        return results.availability;
      }

      toggleError(results.message);

      return [];
    }

    const errorHandler = (error: any) => {
      toggleError(error);
    }

    return asyncRequest<Array<string>>({
      url: FACILITY_AVAILABILITY_API_ENDPOINT,
      body: JSON.stringify({ facility_id, date }),
      handler,
      errorHandler,
    })
  }

  return facility.facility_id ? (
    <div className={classNames("h-noheader", showCalendar && "overflow-y-hidden")}>
      <section><Images facility={facility} /></section>
      <section><Info facility={facility} /></section>
      <section><Description facility={facility} /></section>
      <section><Amenities facility={facility} /></section>
      <section><Map facility={facility} /></section>
      <section><Availability facility={facility} state={{ showCalendar, setShowCalendar }} /></section>
      <section><AvailabilityCalendar facility={facility} state={{ showCalendar, setShowCalendar }} /></section>
      <section className="h-16"></section>
    </div>
  ) : <></>;
}