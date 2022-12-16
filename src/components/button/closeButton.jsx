import React from 'react';
import { CloseButtonWrapper } from './buttonStyle';
import Cross from '../../../public/svg_actions/Cross.svg';

export const CloseButton = ({ ...props }) => {
  return (
    <CloseButtonWrapper {...props}>
      <Cross />
    </CloseButtonWrapper>
  );
};
