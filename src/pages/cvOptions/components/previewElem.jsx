import React, { useState } from 'react';
import { CvCard } from '../../cvPage/components/cvCards/cvCard';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const PreviewElem = ({ elem, path, options, setFieldsState }) => {
  const navigateToMain = useNavigate();

  const modalHandler = e => {
    const elem = [...e.target.classList].includes('modal_wrapper');

    if (elem) {
      navigateToMain(-1);
    }
  };

  return (
    <PreviewElemWrapper className="modal_wrapper" onClick={modalHandler}>
      <CvCard
        cardContents={elem}
        path={path}
        options={options}
        closeEdit
        setFieldsState={setFieldsState}
      />
    </PreviewElemWrapper>
  );
};

export const PreviewElemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & li {
    width: fit-content;
    max-width: 100%;
  }
`;
