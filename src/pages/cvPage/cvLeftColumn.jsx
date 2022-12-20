import React from 'react';
import styled from 'styled-components';
import { RenderCards } from './components/cvCards/renderCards';

export const CvLeftColumn = ({ content }) => {
  return (
    <CvLeftColumnWrapper>
      <RenderCards content={content} />
    </CvLeftColumnWrapper>
  );
};

export const CvLeftColumnWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin: 10px 10px 0px 10px;
  padding: 10px;
  gap: 10px;
`;
