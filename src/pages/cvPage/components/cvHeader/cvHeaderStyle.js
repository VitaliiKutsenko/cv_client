import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const CvHeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    '1 2'
    '3 4'
    '5 6'
    '7 7';
  padding: 10px;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  width: 100%;
  height: 100%;
`;
