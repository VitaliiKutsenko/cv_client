import styled from 'styled-components';
import { theme } from '../../../../../style/theme/theme';

export const InputFormWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  & label {
    display: block;
    font-size: 16px;
    transition: 0.3s linear;
    letter-spacing: 0.1em;
    margin-bottom: 2px;
    &.active {
      letter-spacing: 3px;
      transition: 0.3s linear;
      color: ${({ components }) => theme.auth[components]?.color};
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: 0.3s linear;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);

  &.active {
    transition: 0.3s linear;
    box-shadow: 0 0 2px 1px
      ${({ components }) => theme.auth[components]?.color || 'rgba(0,0,0,0.2)'};
  }

  & input {
    margin: 5px;
    border: none;
    padding: 6px 8px;
    outline: none;
    font-size: 16px;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: transparent;
    color: #06070d;
  }

  & .plug {
    width: 24px;
    height: 24px;
  }
`;

export const InputFormButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;

  & svg {
    width: fit-content;
    margin-right: 5px;
  }
`;
export const InputFormError = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  backdrop-filter: blur(5px);
  top: 0;
  background: rgba(255, 0, 0, 0.8);
  padding: 10px;

  border-radius: 10px;
`;
