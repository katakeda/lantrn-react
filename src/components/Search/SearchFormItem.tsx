import React from 'react';

interface SearchFormItemProps {
  label: string;
  Icon: any;
}

export const SearchFormItem: React.FC<SearchFormItemProps> = ({ children, label, Icon }) => {
  return (
    <div className="flex flex-col py-3 md:flex-grow">
      <span className="pb-1 font-semibold text-gray-600">{label}</span>
      <span className="flex flex-row justify-start h-10 border-2 border-green-500 rounded-full">
        <span className="flex items-center w-1/6"><Icon className="h-5 m-auto" /></span>
        <span className="flex items-center w-5/6">{children}</span>
      </span>
    </div>
  );
}