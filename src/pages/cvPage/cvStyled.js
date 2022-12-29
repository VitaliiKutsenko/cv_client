import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const CvWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to left, white, rgba(165, 165, 165, 0.49));
`;
export const CvMainWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;

  @page {
    size: A4;
  }

  @media (max-width: 700px) {
    & {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
