import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './signUp/signUp';
import { Login } from './login/login';
import { ResetPassword } from './resetPassword/resetPassword';
import { AuthLayoutWrapper, AuthToolbar } from './authStyle';
import { ErrorModal } from './components/errorModal/errorModal';
import { lazy, Suspense } from 'react';
import { Loader } from '../../components/loader/loader';
import { CustomLink } from '../../components/customLinks/customLink';
import { AuthToolBar } from './components/authToolBar';

const SignUp = lazy(() => import('./signUp/signUp'));

export const LazySignUp = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SignUp />
    </Suspense>
  );
};

const Auth = () => {
  const [errors, setErrors] = useState({ error: false });

  return (
    <AuthLayoutWrapper>
      <AuthToolBar>
        <Routes>
          <Route index element={<Login setErrors={setErrors} errors={errors} svg={true} />} />
          <Route path="/registration" element={<LazySignUp setErrors={setErrors} />} />
          <Route path="/forgot-password" element={<ResetPassword setErrors={setErrors} />} />
        </Routes>
      </AuthToolBar>
    </AuthLayoutWrapper>
  );
};

export default Auth;
