import styled from 'styled-components';

export const CvOptionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: 0.5s linear;
`;
export const OptionsPanel = styled.ul`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid black;
  padding: 10px;
  list-style: none;
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border: 1px solid black;
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    padding: 5px;
  }
`;

export const ColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  & .color_picker {
    //background: transparent;
    height: content-box;
    //position: absolute;
    //top: 50px;
  }

  & button {
    border-radius: 50%;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    & svg {
      max-width: 24px;
      max-height: 24px;
    }
  }
`;
