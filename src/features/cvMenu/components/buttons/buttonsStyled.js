import styled from 'styled-components';

export const FormButtonWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  max-width: 100px;
  cursor: pointer;
  background: transparent;
  transition: 0.5s linear;
  & svg {
    width: 30px;
    height: fit-content;
    background: transparent;
    transition: 0.5s linear;
    transform: rotate(0deg);
    fill: rgba(0, 0, 0, 0.5);
  }
  &:hover svg {
    transition: 0.5s linear;
    transform: rotate(90deg);
    background: transparent;
    fill: ${({ fillColor }) => fillColor || 'red'};
    fill-opacity: 0.5;
  }
`;

export const SubmitButtonWrapper = styled.div`
  border: 1px solid;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  perspective: 600px;

  & button {
    padding: 5px;
  }
  & .submit_button {
    transition: 0.3s linear;

    &.hide {
      background: white;
      transform: rotateX(180deg);
    }
    &.hide .submit_button__menu {
      background: tomato;
      transition: 0.3s linear;
      transform: rotateX(180deg);
      &.show {
      }
      &.hide {
      }
    }
  }
`;
