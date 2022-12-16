import React, { useEffect } from 'react';
import { ModalWrapperStyled } from './modalWrapperStyled';
import { useNavigate } from 'react-router-dom';

export const ModalWrapper = ({ children, ...props }) => {
  const navigateToMain = useNavigate();
  const modalHandler = e => {
    const elem = [...e.target.classList].includes('auth_wrapper');

    if (elem) {
      navigateToMain('/');
    }
  };

  useEffect(() => {
    const rootElem = document.querySelector('#root');

    rootElem.classList.add('no-scroll');

    return () => rootElem.classList.remove('no-scroll');
  }, []);

  return (
    <ModalWrapperStyled {...props} className="auth_wrapper" onClick={modalHandler}>
      {children}
    </ModalWrapperStyled>
  );
};
