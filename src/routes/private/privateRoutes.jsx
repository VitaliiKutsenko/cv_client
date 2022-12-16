import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector(store => store.auth.checkAuth);

  if (isAuth?.auth === 'decline') {
    return <Navigate to="/" />;
  }

  return children;
};
