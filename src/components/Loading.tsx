import React from 'react';

interface LoadingProps {

}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="flex h-noheader">
      <div className="m-auto">
        <span className="loading"></span>
      </div>
    </div>
  );
}