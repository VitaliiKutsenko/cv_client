import styled from 'styled-components';

export const CvCardWrapper = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  //margin: 10px;
  background: ${({ options }) => options?.cvCard?.background || 'white'};
  border-radius: ${({ options }) => options?.cvCard?.border?.borderRadius || '10px'};
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
  order: ${({ order }) => order.gridArea || ''};
`;
