import styled from 'styled-components';

export const ModalToolbar = styled.div`
  width: 100%;
  min-height: 60px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 7px 2px -3px black;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  & div svg {
    width: 42px;
  }
`;
