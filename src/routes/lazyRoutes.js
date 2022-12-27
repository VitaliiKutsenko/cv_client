import React, { lazy, Suspense } from 'react';
import { Loader } from '../components/loader/loader';
import { PrivateRoutes } from './private/privateRoutes';

const MainPage = lazy(() => import('./../pages/mainPage/mainPage'));
const UserCollections = lazy(() => import('../pages/cvCollections/userCollections'));
const Cv = lazy(() => import('../pages/cvPage/cv'));
const UserPage = lazy(() => import('../pages/userPage/userPage'));
const Auth = lazy(() => import('../pages/auth/authLayout'));

export const LazyUserPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PrivateRoutes>
        <UserPage />
      </PrivateRoutes>
    </Suspense>
  );
};

export const LazyMainPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MainPage />
    </Suspense>
  );
};

export const LazyUserCollections = () => {
  return (
    <Suspense fallback={<Loader />}>
      <UserCollections />
    </Suspense>
  );
};

export const LazyCv = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Cv />
    </Suspense>
  );
};
