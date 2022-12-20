import React from 'react';
import styled from 'styled-components';
import { RenderCards } from './components/cvCards/renderCards';

export const CvRightColumn = ({ content }) => {
  return (
    <CvRightColumnWrapper>
      <RenderCards content={content} />
    </CvRightColumnWrapper>
  );
};

export const CvRightColumnWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  margin: 10px 10px 10px 0px;
  padding: 10px;
  gap: 10px;
`;
