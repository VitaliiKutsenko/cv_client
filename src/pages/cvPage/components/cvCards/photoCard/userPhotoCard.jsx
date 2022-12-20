import React from 'react';
import { UserPhotoCardWrapper } from './userPhotoCardStyled';
import { PhotoCardPreview } from '../../../../cvMenu/components/photoCard/photoCardStyled';
import { API_URL } from '../../../../../api/api.config';

export const UserPhotoCard = ({ cardFields }) => {
  return (
    <UserPhotoCardWrapper>
      <PhotoCardPreview>
        <div className="fill">
          {cardFields.url && <img alt="hello" src={`${API_URL}/${cardFields.url}`} />}
        </div>
      </PhotoCardPreview>
    </UserPhotoCardWrapper>
  );
};
