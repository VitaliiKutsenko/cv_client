import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const UserSpaceWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: ${theme.colors.mateWhite};
  //background: coral;
`;

export const UserPanelWrapper = styled.ul`
  width: 100%;
  //height: 100%;
  //height: auto;
  //min-height: 20px;
  display: flex;
  flex-direction: row;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.5);

  & li {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & button {
      margin: 10px;
      padding: 5px;
      font-size: 16px;
    }
  }
`;
export const ContentWrapper = styled.div`
  //width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;
