import React, { createContext, useState } from 'react';

import { useSelector } from 'react-redux';

import { ContentWrapper, UserSpaceWrapper } from './userSpaceStyled';
import { UserPanel } from './userPanel';
import { useNavigate } from 'react-router-dom';
import UserSpaceContext from '../../../../context/context';

export const UserSpace = ({ children }) => {
  const auth = useSelector(store => store.auth.checkAuth || {});
  const [edit, setEdit] = useState('false');

  if (auth.success) {
    return (
      <>
        <UserSpaceWrapper>
          <UserPanel setEdit={setEdit} />
        </UserSpaceWrapper>
        <UserSpaceContext.Provider value={edit}>{children}</UserSpaceContext.Provider>
      </>
    );
  }

  return children;
};
