import styled from 'styled-components';

export const OptionsToolbarWrapper = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 5px;
`;
export const OptionsToolbarPanel = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  border-radius: 5px;
  & button {
    background: transparent;
    border: none;
    width: fit-content;
    height: fit-content;
    display: flex;
    & svg {
      width: 25px;
      height: 25px;
      fill: gray;
      &:hover {
        fill: cadetblue;
      }
    }
  }
`;
