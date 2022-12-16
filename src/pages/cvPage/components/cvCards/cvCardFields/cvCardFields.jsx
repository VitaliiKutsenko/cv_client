import React from 'react';
import { CardList, CardListContainer, CvCardFieldsWrapper } from './cvCardFieldsStyled';

export const CvCardFields = ({ cardFields, options }) => {
  const { name, values } = cardFields;

  const renderCvCardFields = () => {
    return values.map(item => {
      return <CardList key={item.value}>{item.value}</CardList>;
    });
  };

  return (
    <CvCardFieldsWrapper options={options}>
      <div className="label">{name}</div>
      <CardListContainer>{renderCvCardFields()}</CardListContainer>
    </CvCardFieldsWrapper>
  );
};
