import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ColorPicker } from './components/colorPicker';
import { useDispatch, useSelector } from 'react-redux';
import { addCvField, changeOptions } from '../../store/cv/userCv/userCvActions';
import { BorderOptions } from './components/borderOptions';
import styled from 'styled-components';

export const CvOptions = ({}) => {
  const navigateToMain = useNavigate();
  const location = useLocation();
  const { path, id, options } = location.state;
  const optionsDispatch = useDispatch();

  const cv = useSelector(store => store.userCv.cv);
  const cvOptions = cv?.data[path]?.find(item => item.id === id)?.options;
  const [option, setOptions] = useState(cvOptions || {});

  const modalHandler = e => {
    const elem = [...e.target.classList].includes('modal_wrapper');

    if (elem) {
      navigateToMain(-1);
    }
  };

  useEffect(() => {
    optionsDispatch(
      changeOptions({
        path,
        id,
        options,
      })
    );
  }, [options]);

  const handleSaveClick = () => {
    optionsDispatch(
      addCvField({
        collectionId: cv.collectionId,
        [path]: cv.data[path].find(item => item.id === id),
      })
    );
  };

  console.log(options);

  return (
    <CvOptionsWrapper className={'modal_wrapper'} onClick={modalHandler}>
      <OptionsPanel>
        <button onClick={handleSaveClick}>Save</button>
        <h2>Options</h2>
        <ColorPicker options={options} setOptions={setOptions} />
        <BorderOptions options={options} setOptions={setOptions} />
      </OptionsPanel>
    </CvOptionsWrapper>
  );
};

export const CvOptionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: 0.5s linear;
`;
export const OptionsPanel = styled.ul`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid black;
  padding: 10px;
  list-style: none;
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border: 1px solid black;
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    padding: 5px;
  }
`;
