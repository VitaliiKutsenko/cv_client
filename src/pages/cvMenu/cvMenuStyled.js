import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const CvItemWrapper = styled.div.attrs(props => {
  return { theme: props.theme };
})`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  transition: 0.5s linear;
  gap: 10px;
  padding: 10px;
  background: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);

  & .modal {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    & .modal_menu {
      width: 100%;
      height: 100%;
      padding: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #f2f3f4;
      overflow-x: hidden;
      overflow-y: auto;
      border-radius: 0 0 10px 10px;
    }
  }

  & .modal_list__content {
    position: relative;
    width: 30%;
    min-width: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: ${theme.border};

    & .outlet_wrapper {
      width: 100%;
      overflow: hidden;
      border-radius: ${theme.border};
    }
  }
`;
