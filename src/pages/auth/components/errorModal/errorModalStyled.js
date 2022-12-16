import styled from 'styled-components';

export const ErrorModalWrapper = styled.div`
  & .errorWrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
    background: rgba(255, 99, 71, 0.9);
    z-index: 1000;

    & p {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s linear;
      width: 100%;
      padding: 10px;
    }

    &.show {
      transition: 0.3s linear;

      transform: translateY(0px);
    }

    &.hide {
      transition: 0.3s linear;
      transform: translateY(-50px);
      opacity: 0;
    }

    & button {
      display: flex;
      fill: black;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;
