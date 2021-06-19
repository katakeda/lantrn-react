import React, { useRef, useState } from 'react';
import { Campground, Media } from '../../types/common';
import { classNames } from '../../utils/common';

interface ResultItemImagesProps {
  campground: Campground;
}

export const ResultItemImages: React.FC<ResultItemImagesProps> = ({ campground }) => {
  const [active, setActive] = useState<number>(0);
  const scrollDivRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleScroll = (): void => {
    setActive(Math.round(scrollDivRef.current.scrollLeft / (scrollDivRef.current.scrollWidth / campground.facility.medias.length)));
  }

  const handleLeftClick = (): void => {
    scrollDivRef.current.scrollLeft = scrollDivRef.current.scrollLeft - (scrollDivRef.current.scrollWidth / campground.facility.medias.length);
  }

  const handleRightClick = (): void => {
    scrollDivRef.current.scrollLeft = scrollDivRef.current.scrollLeft + (scrollDivRef.current.scrollWidth / campground.facility.medias.length);
  }

  return (
    <div className="flex flex-col relative">
      <div
        className="snap overflow-x-auto overflow-y-hidden relative flex-no-wrap flex transition-all"
        onScroll={handleScroll}
        ref={scrollDivRef}
      >
        {campground.facility.medias.map((media: Media) => (
          <div key={media.media_id} className="w-full h-44 rounded-t-xl flex-shrink-0 bg-black text-white flex items-center justify-center">
            <img className="w-full h-full rounded-t-xl" src={media.url} alt={media.media_id} />
          </div>
        ))}
      </div>
      <div className="p-4 flex items-center justify-center flex-1 absolute inset-x-0 bottom-0">
        <button className="font-bold text-lg outline-none focus:outline-none rounded-full mx-4 text-white" onClick={handleLeftClick}>{'<'}</button>
        {campground.facility.medias.map((media: Media, key: number) => (
          <span
            key={media.media_id}
            className={classNames("bg-white w-2 h-2 block mx-1 bg-opacity-25 shadow rounded-full", active === key && "bg-opacity-100")}
          ></span>
        ))}
        <button className="font-bold text-lg outline-none focus:outline-none rounded-full mx-4 text-white" onClick={handleRightClick}>{'>'}</button>
      </div>
    </div>
  );
}