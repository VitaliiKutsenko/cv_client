import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { ErrorPage } from '../components/errorPage/errorPage';
import { Layout } from '../components/layout/layout';
import Cv from '../pages/cvPage/cv';
import CvMenu from '../pages/cvMenu/cvMenu';
import UserPage from '../pages/userPage/userPage';
import Auth from '../pages/auth/authLayout';
import { PrivateRoutes } from './private/privateRoutes';
import { LazyMainPage, LazyUserCollections, LazyUserPage, LazyCv } from './lazyRoutes';
import { CvOptions } from '../pages/cvOptions/cvOptions';

export const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LazyMainPage />} />
      <Route path="auth/*" element={<Auth />} />
      <Route path=":user" element={<LazyUserPage />}>
        <Route path="collections" element={<LazyUserCollections />} />
        <Route path="profile" element={<LazyUserCollections />} />
        <Route path="comments" element={<LazyUserCollections />} />
        {/*<Route path="auth" element={<Navigate to="auth" />} />*/}
      </Route>
      <Route path=":username/:name/*" element={<LazyCv />}>
        <Route path="menu/*" element={<CvMenu />} />
        <Route path="options/*" element={<CvOptions />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
