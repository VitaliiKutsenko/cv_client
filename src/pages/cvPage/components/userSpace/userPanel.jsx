import React from 'react';
import { UserPanelWrapper } from './userSpaceStyled';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserPanel = ({ setEdit }) => {
  const userCv = useSelector(store => store.userCv || {});

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('menu', { state: { collectionId: userCv?.cv.collectionId } });
  };

  return (
    <UserPanelWrapper>
      <li>
        <button onClick={() => setEdit(prev => !prev)}>Edit</button>
        <button onClick={handleNavigate}>add</button>
      </li>
    </UserPanelWrapper>
  );
};
