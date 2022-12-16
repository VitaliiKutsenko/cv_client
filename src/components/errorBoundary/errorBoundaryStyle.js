import styled from 'styled-components';

export const ErrorBoundaryStyle = styled.details`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;

  & p {
    font-weight: normal;
    font-size: 16px;
    color: darkred;
    padding: 5px;
  }
`;
