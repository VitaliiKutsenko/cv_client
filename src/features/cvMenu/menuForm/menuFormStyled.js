import styled from 'styled-components';

export const ModalFormWrapper = styled.div`
  height: inherit;
  width: 100%;
  & form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    & ul {
      width: 100%;
      height: 100%;
      max-height: fit-content;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
    }
    & .form_button__wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-self: flex-end;
      align-self: flex-end;
      justify-content: flex-end;
      flex-direction: row;
      & button {
        padding: 10px;
      }
    }
  }
`;
