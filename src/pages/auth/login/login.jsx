import React, { useEffect } from 'react';
import { FormComponent } from '../components/formComponent/formComponent';
import { useDispatch, useSelector } from 'react-redux';
import { AuthWrapper, SvgContainer } from '../authStyle';
import { clearLoginStore, setLoginFields } from '../../../store/auth/login/loginActions';
import { ErrorModal } from '../../../components/modals/errorModals/errorModal';
import LoginSvg from '../../../../public/svg/Login.svg';
import { useNavigate } from 'react-router-dom';
import { CustomLink } from '../../../components/customLinks/customLink';

export const Login = ({ svg, content }) => {
  const loginDispatch = useDispatch();
  const login = useSelector(store => store.auth.login);

  const navigate = useNavigate();

  useEffect(() => {
    if (login.success?.user?.username) {
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
        inputContent={content.loginFields}
        buttonText={content.buttonText}
        titleText={content.titleText}
        onSubmit={data => {
          loginDispatch(setLoginFields(data));
        }}
      >
        {<CustomLink to={`/auth/reset_password`}>{content.forgotPassLink}</CustomLink>}
      </FormComponent>
    </AuthWrapper>
  );
};
