import React from 'react';
import { Facility } from '../../../types/common';

interface DescriptionProps {
  facility: Facility;
}

export const Description: React.FC<DescriptionProps> = ({ facility }) => {
  return (
    <div className="px-3 py-3 flex">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, cumque obcaecati illum a, architecto corrupti minima provident sit nostrum hic numquam, omnis asperiores nemo fugit suscipit doloribus inventore ratione quam.</p>
    </div>
  );
}