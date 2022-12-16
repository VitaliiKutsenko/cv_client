import React, { useEffect } from 'react';
import { UserPageWrapper, UserLinks, UserOutlet } from './profailePageStyled';
import { Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { CustomLink } from '../../../components/customLinks/customLink';

const ProfilePage = ({}) => {
  return (
    <UserPageWrapper>
      <UserOutlet>
        <Outlet />
      </UserOutlet>
      <UserLinks>
        <CustomLink to="profile">Profile</CustomLink>
        <CustomLink to="collections">collections</CustomLink>
        <CustomLink to="comments">Comments</CustomLink>
        <CustomLink to="auth">Switch account</CustomLink>
        <CustomLink to="logout">Logout</CustomLink>
      </UserLinks>
    </UserPageWrapper>
  );
};

export default ProfilePage;
