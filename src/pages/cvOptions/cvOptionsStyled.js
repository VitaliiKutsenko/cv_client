import styled from 'styled-components';

export const ColorPickerWrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  & .color_picker {
    height: content-box;
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
