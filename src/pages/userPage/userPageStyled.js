import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const UserPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: tomato;
  display: flex;
  justify-content: flex-end;
  //align-items: center;
  position: relative;
  overflow: hidden;
  //margin: 20px;
  padding: 20px;
  gap: 20px;
`;
export const UserLinks = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const UserOutlet = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  min-width: 70%;
  top: 0;
  overflow: hidden;
  & .decor {
    position: absolute;
    width: 200%;
    height: 200%;
    background: ${theme.colors.darkGrey};
    opacity: 0.5;
    bottom: -50%;
    right: 0;
    border-radius: 50%;
  }
`;
