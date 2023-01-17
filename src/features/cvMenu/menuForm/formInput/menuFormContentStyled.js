import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const ModalInputFormWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${theme.border};
  padding: 10px;
  margin: 5px;
  //width: 40%;
  height: fit-content;
  //min-width: 350px;

  & .modalFields_header {
    width: 60%;
    display: flex;

    justify-content: flex-start;
    align-items: center;
    & > button {
      border: 1px solid black;
      padding: 5px;
      width: fit-content;
      margin: 0 5px;
      & svg {
        width: 25px;
      }
    }
  }
  & .modalFields_inputWrapper {
    height: fit-content;
    width: 100%;
    overflow: hidden;
  }
`;
