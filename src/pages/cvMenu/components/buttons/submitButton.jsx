import React, { useState } from 'react';
import { SubmitButtonWrapper } from './buttonsStyled';

export const SubmitButton = ({ getSubmitData }) => {
  const handleSubmitClick = e => {
    getSubmitData();
  };

  return (
    <SubmitButtonWrapper>
      <button onClick={handleSubmitClick}>Confirm</button>
    </SubmitButtonWrapper>
  );
};
