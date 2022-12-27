import React, { useRef, useState } from 'react';
import { PhotoCard_loadField, PhotoCardPreview, PhotoCardWrapper } from './photoCardStyled';
import { FormHeader } from '../../menuForm/formHeaderMenu/formHeader';
import { useDispatch, useSelector } from 'react-redux';
import { uploadUserImage } from '../../../../store/cv/userImage/userImageActions';
import { API_URL } from '../../../../api/api.config';
import { addCvField } from '../../../../store/cv/userCv/userCvActions';

export const PhotoCard = ({ collectionId }) => {
  const userImage = useSelector(store => store.userImage);
  const imageDispatch = useDispatch();
  const loadRef = useRef();
  const handleAdditionalField = () => {};

  const handleRemoveAdditionalField = () => {};

  const handleDownload = async e => {
    const newImage = e.target.files[0];
    const formData = new FormData();

    formData.append('image', newImage);

    imageDispatch(uploadUserImage(formData));
  };

  const handleSaveImage = () => {
    if (userImage.success) {
      const buildImageField = {
        photo: {
          id: 1,
          options: { area: { position: 'left' } },
          fields: [
            {
              name: 'Photo',
              url: userImage?.image?.url,
            },
          ],
        },
      };

      imageDispatch(
        addCvField({
          ...collectionId,
          ...buildImageField,
        })
      );
    }
  };

  return (
    <PhotoCardWrapper>
      <FormHeader
        id
        label="Photo"
        handleAdditionalField={handleAdditionalField}
        handleRemoveAdditionalField={handleRemoveAdditionalField}
      />

      <PhotoCardPreview>
        {userImage && <img alt="hello" src={`${userImage?.image?.url}`} />}
      </PhotoCardPreview>
      <PhotoCard_loadField>
        <button onClick={() => loadRef.current.click()}>Upload</button>
        <input
          ref={loadRef}
          className="hidden"
          type="file"
          onChange={handleDownload}
          accept="image/*,.png,.svg,.jpeg,.gif,.web"
        />
      </PhotoCard_loadField>
      <button onClick={handleSaveImage}>Save</button>
    </PhotoCardWrapper>
  );
};
