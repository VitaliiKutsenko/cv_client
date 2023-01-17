import React from 'react';
import { FormComponent } from '../components/formComponent/formComponent';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordFields } from './resetPasswordFields';
import { AuthWrapper, SvgContainer } from '../authStyle';
import { setResetPasswordFields } from '../../../store/auth/resetPassword/resetPasswordActions';
import ForgotPassword from '../../../../public/svg/ForgotPassword.svg';

export const ResetPassword = ({ setErrors, content }) => {
  const resetPasswordDispatch = useDispatch();

  return (
    <AuthWrapper>
      <SvgContainer>
        <ForgotPassword />
      </SvgContainer>
      <FormComponent
        components="resetPassword"
        setErrors={setErrors}
        titleText={content.titleText}
        comments={content.comments}
        inputContent={content.resetPasswordFields || {}}
        buttonText={content.buttonText}
        redirectButtonPath="/"
        onSubmit={data => resetPasswordDispatch(setResetPasswordFields(data)) || {}}
      />
    </AuthWrapper>
  );
};
