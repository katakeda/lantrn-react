import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

interface WrapperProps {

}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { user, authError } = useAuthContext();

  return user
    ? <Redirect to="/" />
    : (
      <div className="flex h-noheader">
        <div className="m-auto">
          {authError && <div className="py-1 px-2 my-2 text-center text-red-600 border-2 border-red-600">{authError}</div>}
          <div className="w-96 py-4 px-7 shadow-lg rounded-lg">
            {children}
          </div>
        </div>
      </div>
    )
}