import React from 'react';
import { UserPageWrapper, UserLinks, UserOutlet } from './userPageStyled';
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../../components/customLinks/customLink';
import { useSelector } from 'react-redux';

const UserPage = ({}) => {
  const userPageMenu = useSelector(store => store.languages.initial.userPage);

  const userPageMenuRender = menuItem => {
    return menuItem.map(item => {
      return (
        <CustomLink key={item.path} to={item.path}>
          {item.title}
        </CustomLink>
      );
    });
  };

  return (
    <UserPageWrapper>
      <UserOutlet>
        <Outlet />
      </UserOutlet>
      <UserLinks>{userPageMenuRender(userPageMenu)}</UserLinks>
    </UserPageWrapper>
  );
};

export default UserPage;
