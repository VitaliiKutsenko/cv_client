import React from 'react';
import styled from 'styled-components';

const RemoveButtonWrapper = styled.button`
  width: fit-content;
  height: 100%;
`;

export const RemoveButton = ({ children, ...props }) => {
  return <RemoveButtonWrapper {...props}>{children}</RemoveButtonWrapper>;
};
