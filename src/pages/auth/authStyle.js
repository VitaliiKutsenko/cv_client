import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const AuthLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: tomato;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const AuthWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${theme.colors.white};
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  & link {
    color: black;
  }
`;
export const SvgContainer = styled.div`
  background: transparent;
  max-width: 60%;
  width: 150%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 400px;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: fit-content;
  height: 100%;
  & .login_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const AuthToolBarWrapper = styled.div`
  width: 60%;
  height: 80%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  & .toolbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & .cross {
      display: flex;
      transition: 0.3s linear;
      margin: 10px;
      &:hover {
        transform: rotate(-90deg);
        fill: red;
      }
    }
  }
  & .window {
    width: 100%;
    height: 100%;
  }
`;
