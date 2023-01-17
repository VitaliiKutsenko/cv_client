import React from 'react';
import { MainPageAuthWrapper } from '../mainPageStyled';
import { Login } from '../../auth/login/login';
import { CustomLink } from '../../../components/customLinks/customLink';

export const MainPageAuth = ({ content }) => {
  return (
    <MainPageAuthWrapper>
      <CustomLink to={'/auth/forgot-password'} text={content.login.forgotPassLink} />
      <Login content={content.login} />
      <CustomLink to={'/auth/registration'} text={content.signUp.titleText} />
    </MainPageAuthWrapper>
  );
};
