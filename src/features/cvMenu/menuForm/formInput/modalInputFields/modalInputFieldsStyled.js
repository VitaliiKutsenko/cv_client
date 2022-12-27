import styled from 'styled-components';
import { theme } from '../../../../../style/theme/theme';

export const ModalInputFieldsWrapper = styled.li`
  margin: 10px 0;
  display: flex;
  width: 80%;
  & .input_wrapper {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: auto;
    margin-left: 20px;
    &.done .input_status {
      transition: 0.3s linear;
      opacity: 1;
      fill: green;
    }
    &.done textarea {
      transition: 0.3s linear;
      box-shadow: 0 0 2px 1px green;
    }
    & .input_status {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      border-radius: ${theme.border};
      transform: translateX(-30px);
      opacity: 0;
      left: 0;
      transition: 0.3s linear;

      & svg {
        border-radius: 50%;
        width: 24px;
        height: 100%;
      }
    }

    & textarea,
    input {
      transition: 0.3s linear;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      background: white;
      resize: none;
      padding: 5px 10px 10px 5px;
      font-size: 15px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.26);
      border-radius: ${theme.border};
    }
  }

  & button {
    height: 100%;
    display: flex;
    border-radius: 100px;
  }
`;
