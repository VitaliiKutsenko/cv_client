import React, { useContext, useMemo, useState } from 'react';
import { CvCardWrapper } from './cvCardStyled';
import { CvCardFields } from './cvCardFields/cvCardFields';
import { OptionsToolbar } from './optionsToolBar/optionsToolbar';
import UserSpaceContext from '../../../../context/context';
import { UserPhotoCard } from './photoCard/userPhotoCard';

export const CvCard = ({ path, options, cardContents, closeEdit, setFieldsState }) => {
  const { id, fields } = cardContents;
  const edit = useContext(UserSpaceContext);
  const label = useMemo(() => path.toUpperCase().split('_').join(' '), [path]);
  const dateValues = useMemo(
    () =>
      fields
        .filter(item => item.date)
        .map(item => new Date(item.values[0].value).toLocaleString().split(',')[0])
        .join(' / '),
    [fields]
  );

  const renderCvCard = () => {
    return fields.map(field => {
      const keyCreator = field?.name.toLowerCase().split(' ').join('_') + id;

      if (field.name === 'Photo') {
        return (
          <UserPhotoCard key={keyCreator} cardFields={field} setFieldsState={setFieldsState} />
        );
      }

      if (field.labelName) {
        const createDateField = {
          ...field,
          name: field.labelName,
          values: [{ value: dateValues }],
        };

        return (
          <CvCardFields
            path={path}
            key={keyCreator}
            label={label}
            options={options}
            cardFields={createDateField}
            setFieldsState={setFieldsState}
          />
        );
      }

      if (field.name !== 'Photo' && !field.date) {
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
