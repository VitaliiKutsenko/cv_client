import React from 'react';
import { FormButtonWrapper } from './buttonsStyled';

export const FormButton = ({ children, content, ...props }) => {
  return (
    <FormButtonWrapper tabIndex="-1" {...props}>
      {content || children}
    </FormButtonWrapper>
  );
};
