import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../style/theme/theme';
import { CustomLink } from '../../../components/customLinks/customLink';

const cvNavigationBarSchema = [
  {
    id: 1,
    path: '/',
    text: 'HOME',
  },

  {
    id: 2,
    path: 'resume',
    text: 'RESUME',
  },
  {
    id: 3,
    path: 'about_myself',
    text: 'ABOUT MYSELF',
  },
  {
    id: 4,
    path: 'portfolio',
    text: 'PORTFOLIO',
  },
  {
    id: 5,
    path: 'contacts',
    text: 'CONTACTS',
  },
];

export const CvNavigationBar = ({}) => {
  const renderNavigationBar = schema => {
    return schema.map(item => {
      return (
        <CustomLink
          key={item.id}
          activeColor={theme.accentColor.color}
          to={item.path}
          text={item.text}
        />
      );
    });
  };

  return (
    <CvNavigationBarWrapper>
      <nav>{renderNavigationBar(cvNavigationBarSchema)}</nav>
    </CvNavigationBarWrapper>
  );
};

export const CvNavigationBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 70px;
  height: 10%;
  background: ${theme.colors.mateWhite};
  border-radius: 3px;
  box-shadow: 0 0 1px 1px black;
  & nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & .custom_link {
      height: 100%;
      margin-right: 10px;
      &:first-child {
        height: 100%;
        min-height: 70px;
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
        background: ${theme.accentColor.color};
        margin-right: 30px;
        padding: 30px;
      }
    }
  }
`;
