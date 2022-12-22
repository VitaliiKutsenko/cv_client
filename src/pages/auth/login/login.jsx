import React, { useEffect } from 'react';
import { FormComponent } from '../components/formComponent/formComponent';
import { loginFields } from './loginFields';
import { useDispatch, useSelector } from 'react-redux';
import { AuthWrapper, SvgContainer } from '../authStyle';
import { clearLoginStore, setLoginFields } from '../../../store/auth/login/loginActions';
import { ErrorModal } from '../../../modals/errorModals/errorModal';
import LoginSvg from '../../../../public/svg/Login.svg';
import { useNavigate } from 'react-router-dom';

export const Login = ({ svg }) => {
  const loginDispatch = useDispatch();
  const login = useSelector(store => store.auth.login);
  const navigate = useNavigate();

  console.log(login);

  useEffect(() => {
    if (login.success?.user?.username) {
      console.log(1);
      navigate(`${login.success?.user?.username}`);
    }
  }, [login.success]);

  return (
    <AuthWrapper>
      {svg && (
        <SvgContainer>
          <LoginSvg />
        </SvgContainer>
      )}
      {login?.error && (
        <ErrorModal
          error
          message={login.error.message}
          clearStore={() => loginDispatch(clearLoginStore())}
        />
      )}
      {login?.success && (
        <ErrorModal
          success
          message={
            <div>
              <p>{login?.success?.message}</p>
            </div>
          }
          clearStore={() => loginDispatch(clearLoginStore())}
        />
      )}

      <FormComponent
        components="login"
        inputContent={loginFields}
        buttonText="Log in"
        titleText="Log in"
        onSubmit={data => loginDispatch(setLoginFields(data))}
      ></FormComponent>
    </AuthWrapper>
  );
};
