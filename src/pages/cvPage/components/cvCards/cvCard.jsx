import React, { useContext, useMemo } from 'react';
import { CvCardWrapper } from './cvCardStyled';
import { CvCardFields } from './cvCardFields/cvCardFields';
import { OptionsToolbar } from './optionsToolBar/optionsToolbar';
import UserSpaceContext from '../../../../context/context';
import { UserPhotoCard } from './photoCard/userPhotoCard';

export const CvCard = ({ path, options, cardContents, closeEdit, setFieldsState }) => {
  const { id, fields } = cardContents;
  const edit = useContext(UserSpaceContext);

  const label = useMemo(() => path.toUpperCase().split('_').join(' '), [path]);

  const renderCvCard = () => {
    return fields.map(field => {
      const keyCreator = field?.name.toLowerCase().split(' ').join('_') + id;

      if (field.name === 'Photo') {
        return (
          <UserPhotoCard key={keyCreator} cardFields={field} setFieldsState={setFieldsState} />
        );
      }

      if (field.name !== 'Photo') {
        return (
          <CvCardFields
            path={path}
            key={keyCreator}
            label={label}
            options={options}
            cardFields={field}
            setFieldsState={setFieldsState}
          />
        );
      }
    });
  };

  return (
    <CvCardWrapper options={options}>
      <OptionsToolbar edit={!closeEdit ? edit : false} id={id} options={options} path={path}>
        {label !== 'PHOTO' ? <div className="labelText">{label}</div> : ''}
        {renderCvCard()}
      </OptionsToolbar>
    </CvCardWrapper>
  );
};
