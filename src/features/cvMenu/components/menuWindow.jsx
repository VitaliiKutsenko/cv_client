import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export const MenuWindow = ({ children }) => {
  const goBack = useNavigate();
  const params = useParams();
  const modalHandler = e => {
    const elem = [...e.target.classList].includes('modal_wrapper');

    if (elem) {
      goBack(`/${params.username}/${params.name}`);
    }
  };

  useEffect(() => {
    const rootElem = document.querySelector('#root');

    rootElem.classList.add('no-scroll');

    return () => rootElem.classList.remove('no-scroll');
  }, [children]);

  return (
    <MenuWindowWrapper className="modal_wrapper" onClick={modalHandler}>
      {children}
    </MenuWindowWrapper>
  );
};

export const MenuWindowWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s linear;
  gap: 10px;
  padding: 10px;
  background: rgba(128, 128, 128, 0.5);
  backdrop-filter: blur(10px);
`;
