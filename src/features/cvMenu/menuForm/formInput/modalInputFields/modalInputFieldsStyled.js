import styled from 'styled-components';
import { theme } from '../../../../../style/theme/theme';

export const ModalInputFieldsWrapper = styled.li`
  margin: 5px 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  & button {
    height: 100%;
    display: flex;
  }
`;
export const InputFormWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: ${theme.border};
  padding: 5px;
  & button{
    //margin: 2px;
  }
  & svg {
      width: 20px;
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
    font-size: 15px;
    outline: none;
    border: none;
  }
`;
