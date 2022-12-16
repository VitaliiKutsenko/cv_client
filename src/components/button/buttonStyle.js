import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const ButtonWrapper = styled.button`
  position: relative;
  padding: ${theme.buttons.padding};
  font-size: ${theme.buttons.fontSize};
  transition: 0.3s linear;
  border: none;
  width: 100%;

  & svg {
    width: ${theme.buttons.svg.width};
  }

  & a {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  &:hover {
    transition: 0.3s linear;
    box-shadow: inset 0 50px 115px 0 ${({ components }) => theme.auth[components]?.color},
      inset 0 -50px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;
export const CloseButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  transition: 0.3s linear;
  &:hover {
    transform: rotate(-90deg);
  }
`;
