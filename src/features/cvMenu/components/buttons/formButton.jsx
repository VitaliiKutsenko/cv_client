import React from 'react';
import { FormButtonWrapper } from './buttonsStyled';

export const FormButton = ({ children, content, ...props }) => {
  return <FormButtonWrapper {...props}>{content || children}</FormButtonWrapper>;
};
