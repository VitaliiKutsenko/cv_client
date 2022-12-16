import React from 'react';
import { UserPhotoCardWrapper } from './userPhotoCardStyled';
import { PhotoCard_preview } from '../../../../cvMenu/components/photoCard/photoCardStyled';
import { API_URL } from '../../../../../api/api.config';

export const UserPhotoCard = ({ cardFields }) => {
  console.log(cardFields.url);

  return (
    <UserPhotoCardWrapper>
      <PhotoCard_preview>
        {cardFields.url && <img alt="hello" src={`${API_URL}/${cardFields.url}`} />}
      </PhotoCard_preview>
    </UserPhotoCardWrapper>
  );
};
