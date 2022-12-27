import React from 'react';
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ErrorPage } from '../components/errorPage/errorPage';
import { Layout } from '../components/layout/layout';
// import CvMenu from '../pages/cvMenu/cvMenu';
import Auth from '../pages/auth/authLayout';
import { LazyMainPage, LazyUserCollections, LazyUserPage, LazyCv } from './lazyRoutes';
import { CvOptions } from '../pages/cvOptions/cvOptions';
import CvMenu_v2 from '../features/cvMenu/cvMenu_v2';

export const rootRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LazyMainPage />} />
      <Route path="auth/*" element={<Auth />} />
      <Route path=":user" element={<LazyUserPage />}>
        <Route path="collections" element={<LazyUserCollections />} />
        <Route path="profile" element={<LazyUserCollections />} />
        <Route path="comments" element={<LazyUserCollections />} />
      </Route>
      <Route path=":username/:name/*" element={<LazyCv />}>
        <Route path="menu/:path/*" element={<CvMenu_v2 />} />
        <Route path="options/*" element={<CvOptions />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
