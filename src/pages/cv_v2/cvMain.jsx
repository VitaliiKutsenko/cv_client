import React from 'react';
import styled from 'styled-components';

export const CvMain = ({ children }) => {
  return <CvMainWrapper>{children}</CvMainWrapper>;
};

export const CvMainWrapper = styled.main`
  width: 100%;
  height: 100%;
  background: darkcyan;
  box-shadow: 0 0 1px 1px black;
  border-radius: 3px;
`;
