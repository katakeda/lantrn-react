import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';

export const Link: React.FC<LinkProps & React.RefAttributes<HTMLAnchorElement>> = ({ children, ...props }) => {
  const { error, loading, toggleError, toggleLoading } = useAppContext();

  const handleClick = () => {
    error && toggleError(null);
    loading && toggleLoading(false);
  }

  return (
    <RouterLink {...props} onClick={handleClick}>{children}</RouterLink>
  )
}