import React, { useCallback, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindowWrapper } from './modalWindowStyled';

const modalRootElement = document.querySelector('#modal');

export const ModalWindow = ({ open, onClose, children }) => {
  const element = useMemo(() => document.createElement('div'), []);
  const closeModalHandler = useCallback(
    e => {
      const modalElem = e.target.id === 'close_modal';

      if (modalElem) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      modalRootElement.appendChild(element);

      return () => modalRootElement.removeChild(element);
    }
  });

  if (open) {
    return createPortal(
      <ModalWindowWrapper id="close_modal" onClick={closeModalHandler}>
        {children}
      </ModalWindowWrapper>,
      element
    );
  }

  return null;
};
