import React from 'react';
import { FormComponent } from '../components/formComponent/formComponent';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordFields } from './resetPasswordFields';
import { AuthWrapper, SvgContainer } from '../authStyle';
import { setResetPasswordFields } from '../../../store/auth/resetPassword/resetPasswordActions';
import ForgotPassword from '../../../../public/svg/ForgotPassword.svg';

export const ResetPassword = ({ setErrors }) => {
  const resetPasswordDispatch = useDispatch();

  return (
    <AuthWrapper>
      <SvgContainer>
        <ForgotPassword />
      </SvgContainer>
      <FormComponent
        components="resetPassword"
        setErrors={setErrors}
        titleText="Forgot your password?"
        comments="Enter your username and we’ll send a link to reset your password."
        inputContent={resetPasswordFields || {}}
        buttonText="Reset password"
        redirectButtonPath="/"
        onSubmit={data => resetPasswordDispatch(setResetPasswordFields(data)) || {}}
      />
    </AuthWrapper>
  );
};
