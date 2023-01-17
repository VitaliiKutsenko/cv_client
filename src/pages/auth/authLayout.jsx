import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { ResetPassword } from './resetPassword/resetPassword';
import { AuthLayoutWrapper } from './authStyle';
import { AuthToolBar } from './components/authToolBar';
import { useSelector } from 'react-redux';
import SignUp from './signUp/signUp';

const Auth = () => {
  const authLanguages = useSelector(store => store.languages.initial.auth);
  const [errors, setErrors] = useState({ error: false });

  return (
    <AuthLayoutWrapper>
      <AuthToolBar content={authLanguages}>
        <Routes>
          <Route
            index
            element={
              <Login
                setErrors={setErrors}
                errors={errors}
                svg={true}
                content={authLanguages.login}
              />
            }
          />
          <Route
            path="registration"
            element={<SignUp setErrors={setErrors} content={authLanguages.signUp} />}
          />
          <Route
            path="reset_password"
            element={<ResetPassword setErrors={setErrors} content={authLanguages.resetPassword} />}
          />
        </Routes>
      </AuthToolBar>
    </AuthLayoutWrapper>
  );
};

export default Auth;
