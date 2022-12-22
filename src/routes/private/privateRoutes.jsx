import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCheckAuth } from '../../store/auth/checkAuth/checkAuthActions';

export const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector(store => store.auth.checkAuth);
  const checkAuthDispatch = useDispatch();

  useEffect(() => {
    if (!isAuth.success) {
      checkAuthDispatch(fetchCheckAuth());
    }
  }, [isAuth.success]);

  if (isAuth?.auth === 'decline') {
    return <Navigate to="/" />;
  }

  return children;
};
