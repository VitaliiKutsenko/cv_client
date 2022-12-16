import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const ModalWrapperStyled = styled.div`
  max-width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: ${({ position }) => (position ? position : 'flex-end')};
  overflow: hidden;
`;
