import styled, { keyframes } from 'styled-components';
import { theme } from '../../../style/theme/theme';

export const ModalFormWrapper = styled.div`
//height:100%;
//width: 100%;
  & form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    overflow: scroll;
    
    
    & ul {
      //width: 100%;
      //height: 100%;

      //height: content-box;
      //max-height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      //flex-wrap: wrap;
    }

    & .form_button__wrapper {
      //margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;
      height: fit-content;

    }
`;
