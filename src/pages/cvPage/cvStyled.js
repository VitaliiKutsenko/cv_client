import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const CvWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.mateWhite};
`;
export const CvMainWrapper = styled.div`
  display: flex;
  width: 70%;
  @media (max-width: 1000px) {
    & {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
