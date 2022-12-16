import styled from 'styled-components';
import { theme } from '../../../style/theme/theme';

export const PersonalAreaListWrapper = styled.div`
  background: white;
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-start;
  top: 70px;
  right: 10px;
  position: absolute;
  box-shadow: 0 0 2px 0 black;
  border-radius: ${theme.border};

  & ul {
    border-radius: ${theme.border};
    padding: 30px;
    list-style: none;
    background: whitesmoke;
    right: 0;
    & li {
      margin: 10px 0;
    }
  }
`;
