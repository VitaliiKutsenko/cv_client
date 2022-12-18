import styled from 'styled-components';

export const CvCardWrapper = styled.li`
  list-style: none;
  background: ${({ options }) => options?.cvCard?.background || 'white'};
  border-radius: ${({ options }) => options?.cvCard?.border?.borderRadius || '10px'};
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  order: ${({ order }) => order?.gridOrder || ''};
  width: fit-content;
  height: fit-content;
  margin: 10px;
`;
