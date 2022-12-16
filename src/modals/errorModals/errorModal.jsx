import React, { useEffect, useRef, useState } from 'react';
import { ErrorModalWrapper } from './errorModalStyled';
import { ModalWindow } from '../modalWindow';
import { useNavigate } from 'react-router-dom';
import { CloseButton } from '../../components/button/closeButton';

export const ErrorModal = ({ message, clearStore, error, success }) => {
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const closeHandler = () => {
    setOpen(false);
    clearStore();
  };

  useEffect(() => {
    if (error) {
      setOpen(true);
      setIsError(true);
    }

    if (success) {
      setOpen(true);
      setIsError(false);
    }

    return () => closeHandler();
  }, [error, success]);

  return (
    <ModalWindow open={open} onClose={closeHandler}>
      <ErrorModalWrapper isError={isError}>
        <CloseButton onClick={closeHandler} />
        {message}
      </ErrorModalWrapper>
    </ModalWindow>
  );
};
