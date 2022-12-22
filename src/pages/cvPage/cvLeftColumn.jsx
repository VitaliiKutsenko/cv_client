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
  //background: rgba(0, 139, 139, 0.57);
  width: 30%;
  min-width: 250px;
  height: 100%;
  margin: 10px 10px 0px 10px;
  //padding: 10px;
  gap: 10px;
  @media (max-width: 1000px) {
    & {
      width: 100%;
      margin: 0;
      padding: 10px;
    }
  }
`;
