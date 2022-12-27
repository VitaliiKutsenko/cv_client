import React, { useState } from 'react';
import { PersonalAreaWrapper } from './personalAreaStyled';
import { ModalWindow } from '../modals/modalWindow';
import { PersonalAreaList } from './personalAreaList/personalAreaList';
import ProfileDefault from '../../../public/svg/ProfileDefault.svg';

import { useSelector } from 'react-redux';

export const PersonalArea = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const auth = useSelector(store => store.auth.checkAuth || {});

  if (auth?.success) {
    return (
      <PersonalAreaWrapper>
        <div className="personal_wrapper">
          <p>{auth.data.username}</p>
          <button className="profile_wrapper__button" onClick={() => setMenuToggle(prev => !prev)}>
            <ProfileDefault />
          </button>
        </div>
        <ModalWindow open={menuToggle} onClose={() => setMenuToggle(false)}>
          <PersonalAreaList />
        </ModalWindow>
      </PersonalAreaWrapper>
    );
  }
};
