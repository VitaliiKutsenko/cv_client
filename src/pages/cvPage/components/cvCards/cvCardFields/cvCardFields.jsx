import React, { useMemo, useState } from 'react';
import { CardList, CardListContainer, CvCardFieldsWrapper, DateList } from './cvCardFieldsStyled';

export const CvCardFields = ({ cardFields, options, setFieldsState, label, path }) => {
  const { name, values, fieldOptions } = cardFields;
  const listClassNameCreator = useMemo(() => name.toLowerCase().split(' ').join('_'), [name]);
  const renderCvCardFields = () => {
    return values.map(item => {
      return <CardList key={item.value}>{item.value}</CardList>;
    });
  };

  const handleFieldData = () => {
    if (setFieldsState) {
      setFieldsState(cardFields);
    }
  };

  return (
    <CvCardFieldsWrapper
      fieldOptions={fieldOptions}
      onClick={handleFieldData}
      setFieldsState={setFieldsState}
      className={`${path} ${listClassNameCreator}`}
    >
      {label !== name.toUpperCase() && <div className="label">{name}:</div>}

      <CardListContainer options={options}>{renderCvCardFields()}</CardListContainer>
    </CvCardFieldsWrapper>
  );
};
