import React from 'react';
import { ModalForm } from '../../editCard/modalForm';

import { ModalListWindowWrapper } from './modalListWindowStyled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAdditionalField,
  removeAdditionalField,
} from '../../../../store/cv/menuFields/cvAllUserFieldsActions';
import { selectUserCards } from '../../../../store/cv/menuFields/cvAlluserFieldsSelector';
import { addCvField, removeCvField } from '../../../../store/cv/userCv/userCvActions';
import { PhotoCard } from '../photoCard/photoCard';

export const ModalListWindow = ({ path, collectionId }) => {
  const fieldDispatch = useDispatch();
  const store = useSelector(selectUserCards);

  const handleAddNewField = () => {
    fieldDispatch(addAdditionalField(path));
  };

  const handleRemoveNewField = id => {
    const objectDestroy = {
      path,
      id,
    };

    if (id > 1) {
      fieldDispatch(removeAdditionalField(objectDestroy));

      fieldDispatch(removeCvField(objectDestroy));
    }
  };

  const renderForm = () => {
    if (path !== 'photo') {
      const initialItem = store[path];

      return initialItem.map(({ id, fields }) => {
        return (
          <ModalForm
            key={id}
            id={id}
            initialItem={initialItem}
            path={path}
            onSubmit={event => {
              fieldDispatch(
                addCvField({
                  ...collectionId,
                  ...event,
                })
              );
            }}
            fieldsList={fields}
            handleAdditionalField={handleAddNewField}
            handleRemoveAdditionalField={handleRemoveNewField}
          />
        );
      });
    }

    if (path === 'photo') {
      return <PhotoCard collectionId={collectionId} />;
    }
  };

  return <div> {renderForm()}</div>;
};
