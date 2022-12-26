import React from 'react';
import styled from 'styled-components';

import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ModalListWindow } from '../../cvMenu/components/modalListWindow/modalListWindow';
import { MenuWindow } from './menuWindow';
import { CustomLink } from '../../../components/customLinks/customLink';

const schema = { profile: ['about_my_self', 'photo', 'contact_info'] };

const CvMenu_v2 = () => {
  const param = useParams();
  const renderLinks = () => {
    return schema[param.path].map((link, index) => {
      return (
        <CustomLink
          key={link}
          text={link}
          to={index === 0 ? `/${param.username}/${param.name}/menu/${param.path}` : link}
        />
      );
    });
  };

  const renderRoute = () => {
    return schema[param.path].map((link, index) => {
      return (
        <Route
          key={link}
          path={index === 0 ? null : link}
          index={index === 0 ? true : false}
          element={<ModalListWindow key={link} collectionId={param.name} path={link} />}
        />
      );
    });
  };

  return (
    <MenuWindow>
      <MenuWrapper>
        <MenuHeader>{renderLinks()}</MenuHeader>
        <MenuContent>
          <Routes>{renderRoute()}</Routes>
        </MenuContent>
      </MenuWrapper>
    </MenuWindow>
  );
};

export default CvMenu_v2;

export const MenuWrapper = styled.div`
  width: 60%;
  height: 80%;
  background: rgba(255, 165, 0, 0.5);
  overflow: hidden;
`;
export const MenuHeader = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 10px;
`;
export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
