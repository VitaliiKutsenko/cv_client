import React, { lazy, Suspense, useEffect } from 'react';
import { GlobalStyleComponent } from './style/styled/globalStyle';
import { ErrorBoundary } from './components/errorBoundary/errorBoundary';
import { RouterProvider, useNavigate } from 'react-router-dom';
import { rootRouter } from './routes/rootRouter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCheckAuth } from './store/auth/checkAuth/checkAuthActions';

export const App = () => {
  const checkAuthDispatch = useDispatch();

  const auth = useSelector(store => store.auth.checkAuth);

  useEffect(() => {
    if (!auth.success) {
      checkAuthDispatch(fetchCheckAuth());
    }
  }, [auth.success]);

  return (
    <>
      <GlobalStyleComponent />
      <ErrorBoundary>
        <RouterProvider router={rootRouter} />
      </ErrorBoundary>
    </>
  );
};
