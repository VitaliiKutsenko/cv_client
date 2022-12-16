import React from 'react';
import { ButtonWrapper } from './buttonStyle';
import PropTypes from 'prop-types';

export const Button = ({ children, clickFn, ...props }) => {
  return (
    <ButtonWrapper {...props} onClick={clickFn}>
      {children}
    </ButtonWrapper>
  );
};

Button.propType = {
  clickFn: PropTypes.func,
  children: PropTypes.string,
};
