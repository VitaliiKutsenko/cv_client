import React from 'react';
import { FormComponent } from '../components/formComponent/formComponent';
import { signUpFields } from './signUpFields';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AuthWrapper, SvgContainer } from '../authStyle';
import {
  resetRegistration,
  setRegistrationFields,
} from '../../../store/auth/registration/registrationActions';
import SignUpSvg from '../../../../public/svg/SignUp.svg';
import { ErrorModal } from '../../../components/modals/errorModals/errorModal';

export const SignUp = ({ setErrors, content }) => {
  const registrationDispatch = useDispatch();
  const registrationStore = useSelector(store => store.auth.registration || []);

  return (
    <AuthWrapper>
      <SvgContainer>
        <SignUpSvg />
      </SvgContainer>
      {registrationStore?.error && (
        <ErrorModal
          error
          message={registrationStore.error.message}
          clearStore={() => registrationDispatch(resetRegistration())}
        />
      )}
      {registrationStore?.success && (
        <ErrorModal
          success
          message={
            <div>
              <p>{registrationStore?.success?.message}</p>
              Please {<NavLink to="/auth">Sign in</NavLink>} for start using app!
            </div>
          }
          clearStore={() => registrationDispatch(resetRegistration())}
        />
      )}
      <FormComponent
        components="signUp"
        setErrors={setErrors}
        titleText={content.titleText}
        inputContent={content.signUpFields}
        buttonText={content.buttonText}
        onSubmit={data => registrationDispatch(setRegistrationFields(data))}
      />
    </AuthWrapper>
  );
};

export default SignUp;
