import React, { useMemo } from 'react';

import { PersonalAreaListWrapper } from './personalAreaListStyled';
import { CustomLink } from '../../customLinks/customLink';
import { personalListSchema } from './personalListSchema';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../../store/auth/logout/logoutActions';

export const PersonalAreaList = ({}) => {
  const logoutDispatch = useDispatch();
  const params = useParams();
  const createPath = useMemo(() => {
    if (params.name && params.id) {
      return `${params.name}/${params.id}`;
    }

    return '';
  }, [params]);

  const renderPersonalList = useMemo(() => {
    return personalListSchema.map(item => {
      return (
        <li className="personal_menu__list" key={item.title}>
          <CustomLink to={`${item.path}`}>{item.title}</CustomLink>
        </li>
      );
    });
  }, [createPath]);

  const logoutHandler = e => {
    e.preventDefault();
    logoutDispatch(fetchLogout());
  };

  return (
    <PersonalAreaListWrapper>
      <ul className="personal_menu">
        {renderPersonalList}
        {/*<CustomLink to="/" onClick={logoutHandler}>*/}
        <CustomLink to="/" onClick={logoutHandler}>
          Logout
        </CustomLink>
      </ul>
    </PersonalAreaListWrapper>
  );
};
