import styled, { keyframes } from 'styled-components';
import { theme } from '../../../style/theme/theme';

export const ModalFormWrapper = styled.div`
  height: fit-content;
  width: content-box;
  margin-bottom: 10px;
  background: white;
  border-radius: ${theme.border};
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background: linear-gradient(to left bottom, ${({ color }) => color || 'grey'}, ${props =>
  props.themes} 50%);
    border-radius: 0 0 10px 10px;
    padding: 10px;
    position: relative;
    transition: 0.3s linear;

    &.hide {
      opacity: 0;
      transition: 0.3s linear;
    }

    &.show {
      opacity: 1;
      transition: 0.3s linear;
    }

    & ul {
      width: 100%;
      height: fit-content;
      overflow: visible;
    }

    & .form_button__wrapper {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;
      height: fit-content;

    }
`;
