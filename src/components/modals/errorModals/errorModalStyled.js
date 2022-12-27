import styled from 'styled-components';
import { theme } from '../../../style/theme/theme';

export const ErrorModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  top: 20%;
  bottom: 50%;
  background: ${({ isError }) => (isError ? '#ff6f61' : 'rgba(77,208,128,1)')};
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 black;

  & button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
