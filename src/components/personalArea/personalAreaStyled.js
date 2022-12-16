import styled from 'styled-components';

export const PersonalAreaWrapper = styled.div`
  height: auto;
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: clip;
  & .personal_wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & p {
      color: black;
      margin-right: 10px;
    }

    & .profile_wrapper__button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      min-width: 50px;
      height: 50px;
      cursor: pointer;
      transition: 0.3s linear;
      background: whitesmoke;
      border: none;
      box-shadow: 0 0 2px 0 black;
      & svg {
        background: whitesmoke;
        position: absolute;
        fill: black;
        width: 32px;
        height: 32px;
        &:nth-child(2) {
          transform: rotateY(180deg);
        }
      }
    }
  }
`;
