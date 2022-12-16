import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const SelectMenuWrapper = styled.ul`
  position: relative;
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-radius: ${theme.border};
`;
export const SelectTriggerWrapper = styled.li.attrs(props => {
  return { theme: props.theme };
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${theme.border};
  margin: 10px;
  width: 100%;
  height: 100%;
  font-size: 18px;
  border: 1px solid rgba(206, 187, 187, 0.66);
  cursor: pointer;
  perspective: 600px;
  overflow: hidden;
  box-shadow: inset 1px 1px 1px 100px #f2f3f4;
  transition: 0.2s linear;

  &.active {
    transition: 0.2s linear;
    background: ${({ theme }) => theme};
    & svg {
      transition: 0.3s linear;
      opacity: 1;
      transform: rotate(0deg) translateX(0);
    }
  }

  & svg {
    right: 0;
    fill: rgba(0, 0, 0, 0.5);
    width: 32px;
    height: 32px;
    opacity: 0;
    transform: rotateY(180deg) translateX(-100px);
    transition: 0.3s linear;
  }
`;
