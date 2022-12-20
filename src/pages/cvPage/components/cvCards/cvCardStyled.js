import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const CvCardWrapper = styled.li`
  list-style: none;
  background: ${({ options }) => options?.cardBackground || 'white'};
  border-radius: ${({ options }) => options?.cardBorderRadius + 'px' || '10px'};
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  order: ${({ options }) => options?.area?.id || ''};
  width: 100%;
  padding: 10px;
  flex-wrap: wrap;
  height: fit-content;
  & .labelText {
    text-align: justify-all;
    color: ${theme.colors.darkGrey};
    font-weight: bold;
    font-size: 16px;
  }
  &.skills {
    display: flex;
  }
`;
