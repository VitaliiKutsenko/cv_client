import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const CvMainWrapper = styled.main`
  width: 60%;
  height: 100vh;
  display: flex;
  background: white;
  backdrop-filter: blur(10px);
  border-radius: ${theme.border};
  flex-direction: column;
  margin: 80px 10px 0 0;
  box-shadow: 0 0 3px 0 black;
  padding: 5px;
`;
