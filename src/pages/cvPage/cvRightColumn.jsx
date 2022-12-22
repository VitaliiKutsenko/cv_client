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
  flex-direction: column;
  height: fit-content;
  width: 80%;
  margin: 10px 10px 10px 0px;
  gap: 10px;
  @media (max-width: 1000px) {
    & {
      width: 100%;
      margin: 0;
      margin-top: 10px;
      padding: 10px;
    }
  }
`;
