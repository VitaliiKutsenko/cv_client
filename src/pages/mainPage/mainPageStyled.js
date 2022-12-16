import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const MainPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: tomato;
  display: flex;
  justify-content: space-between;
  //align-items: center;
  position: relative;
  overflow: hidden;
  //margin: 20px;
  padding: 20px;
  gap: 20px;
`;

export const MainPageAuthWrapper = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const MainPageNews = styled.div`
  max-width: 40%;
  height: 100%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  & ul {
    width: 100%;
    height: 100%;
    padding: 5px;
    overflow-y: auto;
    list-style: none;
    background: white;

    & li {
      width: 100%;
      height: fit-content;
      margin-bottom: 10px;
      background: ${theme.colors.gray};
      padding: 10px;
      border-radius: 10px;
    }
  }
`;
