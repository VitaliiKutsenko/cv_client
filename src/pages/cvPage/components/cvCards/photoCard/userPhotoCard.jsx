import React from 'react';
import { UserPhotoCardWrapper } from './userPhotoCardStyled';
import { PhotoCardPreview } from '../../../../cvMenu/components/photoCard/photoCardStyled';

export const UserPhotoCard = ({ cardFields }) => {
  return (
    <UserPhotoCardWrapper>
      <PhotoCardPreview>
        <div className="fill">
          {cardFields.url && (
            <img className="avatar" alt="hello" src={`${cardFields.url.Location}`} />
          )}
        </div>
      </PhotoCardPreview>
    </UserPhotoCardWrapper>
  );
};
