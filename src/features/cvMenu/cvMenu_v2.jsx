import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { MenuControllers } from './menuControllers';
import { MenuWindow } from './components/menuWindow';
import { CustomLink } from '../../components/customLinks/customLink';
import { menuSchema } from './schema/menuFields';
import { MenuContent, MenuHeader, MenuWrapper } from './cvMenuStyled';

const CvMenu_v2 = () => {
  const param = useParams();
  const renderLinks = () => {
    return menuSchema[param.path].map((link, index) => {
      return (
        <CustomLink
          key={link.path}
          text={link.path}
          to={index === 0 ? `/${param.username}/${param.name}/menu/${param.path}` : link.path}
        />
      );
    });
  };

  const renderRoutes = () => {
    return (
      <Routes>
        {menuSchema[param.path].map((link, index) => {
          return (
            <Route
              key={link.path}
              path={!index ? null : link.path}
              index={!index}
              element={
                <MenuControllers
                  key={link.path}
                  collectionId={param.name}
                  path={link.path}
                  svg={link.svg}
                />
              }
            />
          );
        })}
      </Routes>
    );
  };

  return (
    <MenuWindow>
      <MenuWrapper>
        <MenuHeader>{renderLinks()}</MenuHeader>
        <MenuContent>{renderRoutes()}</MenuContent>
      </MenuWrapper>
    </MenuWindow>
  );
};

export default CvMenu_v2;
