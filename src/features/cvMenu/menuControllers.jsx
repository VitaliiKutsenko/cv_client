import React, { useCallback } from 'react';
import { MenuForm } from './menuForm/menuForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAdditionalField,
  removeAdditionalField,
} from '../../store/cv/menuFields/cvAllUserFieldsActions';
import { selectUserCards } from '../../store/cv/menuFields/cvAlluserFieldsSelector';
import { addCvField, removeCvField } from '../../store/cv/userCv/userCvActions';
import { PhotoCard } from './components/photoCard/photoCard';

export const MenuControllers = ({ path, collectionId, svg }) => {
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

  const handleSubmit = useCallback(e => {
    console.log(e);
    // fieldDispatch(
    //   addCvField({
    //     ...collectionId,
    //     ...e,
    //   })
    // );
  }, []);

  const renderForm = () => {
    switch (path) {
      case 'photo': {
        return <PhotoCard collectionId={collectionId} />;
      }

      default: {
        return store[path].map(({ id, fields }) => {
          console.log(fields);

          return (
            <MenuForm
              key={id}
              id={id}
              fields={fields}
              onSubmit={e => handleSubmit(e)}
              handleAdditionalField={handleAddNewField}
              handleRemoveAdditionalField={handleRemoveNewField}
            />
          );
        });
      }
    }
  };

  return (
    <>
      {svg}
      {renderForm()}
    </>
  );
};
