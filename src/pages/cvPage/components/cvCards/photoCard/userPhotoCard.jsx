import React, { useEffect, useState } from 'react';
import { UserPhotoCardWrapper } from './userPhotoCardStyled';
import { PhotoCardPreview } from '../../../../cvMenu/components/photoCard/photoCardStyled';

export const UserPhotoCard = ({ cardFields }) => {
  const src = cardFields.url.Location;

  const placeholderSrc = '../../../../../../public/svg/Spinner.gif';
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();

    img.src = src;

    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <UserPhotoCardWrapper>
      <PhotoCardPreview>
        <div className="fill">{src && <img className="avatar" alt="hello" src={imgSrc} />}</div>
      </PhotoCardPreview>
    </UserPhotoCardWrapper>
  );
};
