import React, { useEffect } from 'react';
import { FormComponent } from '../components/formComponent/formComponent';
import { signUpFields } from './signUpFields';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthWrapper, SvgContainer } from '../authStyle';
import {
  resetRegistration,
  setRegistrationFields,
} from '../../../store/auth/registration/registrationActions';
import SignUpSvg from '../../../../public/svg/SignUp.svg';
import { fetchCheckAuth } from '../../../store/auth/checkAuth/checkAuthActions';
import { ErrorModal } from '../../../modals/errorModals/errorModal';
import { clearLoginStore } from '../../../store/auth/login/loginActions';
import { CustomLink } from '../../../components/customLinks/customLink';

export const SignUp = ({ setErrors }) => {
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
        titleText="Sign up"
        inputContent={signUpFields}
        buttonText="Confirm"
        onSubmit={data => registrationDispatch(setRegistrationFields(data))}
      />
    </AuthWrapper>
  );
};

export default SignUp;
