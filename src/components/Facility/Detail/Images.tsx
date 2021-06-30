import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Facility, Media } from '../../../types/common';
import { classNames } from '../../../utils/common';

interface ImagesProps {
  facility: Facility;
}

export const Images: React.FC<ImagesProps> = ({ facility }) => {
  const [active, setActive] = useState<number>(0);
  const scrollDivRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleScroll = (): void => {
    setActive(Math.round(scrollDivRef.current.scrollLeft / (scrollDivRef.current.scrollWidth / facility.medias.length)));
  }

  const handleLeftClick = (): void => {
    scrollDivRef.current.scrollLeft = scrollDivRef.current.scrollLeft - (scrollDivRef.current.scrollWidth / facility.medias.length);
  }

  const handleRightClick = (): void => {
    scrollDivRef.current.scrollLeft = scrollDivRef.current.scrollLeft + (scrollDivRef.current.scrollWidth / facility.medias.length);
  }

  return (
    <div className="relative">
      <div
        className="snap overflow-x-auto overflow-y-hidden relative flex-no-wrap flex transition-all"
        onScroll={handleScroll}
        ref={scrollDivRef}
      >
        {facility.medias && facility.medias.map((media: Media) => (
          <div key={media.media_id} className="w-full h-72 flex-shrink-0 bg-black text-white flex items-center justify-center">
            <img className="w-full h-full" src={media.url} alt={media.media_id} />
          </div>
        ))}
      </div>
      <div className="p-4 absolute inset-y-0 left-0 flex">
        <button className="font-bold text-lg outline-none focus:outline-none mx-2 text-white" onClick={handleLeftClick}>
          <ChevronLeftIcon className="w-10 h-10" />
        </button>
      </div>
      <div className="p-4 flex items-center justify-center flex-1 absolute inset-x-0 bottom-0">
        {facility.medias && facility.medias.map((media: Media, key: number) => (
          <span
            key={media.media_id}
            className={classNames("bg-white w-2 h-2 block mx-1 bg-opacity-25 shadow rounded-full", active === key && "bg-opacity-100")}
          ></span>
        ))}
      </div>
      <div className="p-4 absolute inset-y-0 right-0 flex">
        <button className="font-bold text-lg outline-none focus:outline-none mx-2 text-white" onClick={handleRightClick}>
          <ChevronRightIcon className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}