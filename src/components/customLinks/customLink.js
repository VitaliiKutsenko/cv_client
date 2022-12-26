import React from 'react';
import { NavLinksWrapper } from './customLinkStyled';
import { Link, NavLink, useMatch } from 'react-router-dom';

export const CustomLink = ({ children, to, text, ...props }) => {
  return (
    <NavLinksWrapper className="custom_link" {...props}>
      <NavLink to={to}>{children || text}</NavLink>
    </NavLinksWrapper>
  );
};
