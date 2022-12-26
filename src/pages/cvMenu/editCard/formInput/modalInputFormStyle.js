import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const ModalInputFormWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${theme.border};
  padding: 10px;
  margin: 10px;
  width: 40%;
  height: fit-content;
  min-width: 350px;

  & .modalFields_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .modalFields_inputWrapper {
    height: fit-content;
    width: 100%;
    overflow: hidden;
    //margin: 10px;
  }
`;
