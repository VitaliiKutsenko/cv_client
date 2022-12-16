import styled from 'styled-components';
import { theme } from '../../../style/theme/theme';

export const HeaderWrapper = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  overflow: hidden;

  & .header_toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    //height: 60px;
    background: whitesmoke;
    box-shadow: 0 0 3px 0 black;
    padding: 30px;
  }
`;
