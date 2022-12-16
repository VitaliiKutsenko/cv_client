import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const ModalInputFormWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${theme.border};
  padding: 10px;

  & .modalFields_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .modalFields_inputWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
`;
