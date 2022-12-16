import React from 'react';
import { MainPageAuthWrapper } from '../mainPageStyled';
import { Login } from '../../auth/login/login';
import { CustomLink } from '../../../components/customLinks/customLink';

export const MainPageAuth = ({}) => {
  return (
    <MainPageAuthWrapper>
      <CustomLink to={'/auth/forgot-password'} text="Forgot password ?" />
      <Login />
      <CustomLink to={'/auth/registration'} text="Sign-Up" />
    </MainPageAuthWrapper>
  );
};
