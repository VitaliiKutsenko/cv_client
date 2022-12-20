import React, { useState } from 'react';
import { CardList, CardListContainer, CvCardFieldsWrapper, DateList } from './cvCardFieldsStyled';

export const CvCardFields = ({ cardFields, options, setFieldsState, label, path }) => {
  const { name, values, fieldOptions } = cardFields;

  const renderCvCardFields = () => {
    return values.map(item => {
      if (cardFields.date) {
        const dateParse = new Date(item.value).toLocaleString().split(',')[0];

        return <CardList key={item.value}>{dateParse}</CardList>;
      }

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
      className={path}
    >
      {label !== name.toUpperCase() && <div className="label">{name}:</div>}
      <CardListContainer options={options}>{renderCvCardFields()}</CardListContainer>
    </CvCardFieldsWrapper>
  );
};
