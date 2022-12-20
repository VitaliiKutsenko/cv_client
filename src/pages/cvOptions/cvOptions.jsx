import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorPicker } from './components/colorPicker';
import { useDispatch, useSelector } from 'react-redux';
import { addCvField, changeOptions } from '../../store/cv/userCv/userCvActions';
import { BorderOptions } from './components/borderOptions/borderOptions';
import styled from 'styled-components';
import { PreviewElem } from './components/previewElem';
import { addFieldOptions, addOptions } from '../../store/cv/cvOptions/cvOptionsActions';
import { PositionOptions } from './components/positionOptions/positionOptions';
import { FieldOptions } from './components/fieldOptions/fieldOptions';

export const CvOptions = ({}) => {
  const location = useLocation();
  const { path, id, options } = location.state;
  const optionsDispatch = useDispatch();

  const cv = useSelector(store => store.userCv.cv);
  const cvOptions = cv?.data[path]?.find(item => item.id === id);
  const [option, setOptions] = useState(cvOptions.options || {});
  const [fieldsState, setFieldsState] = useState(null);

  const { cvCardOptions, cvCardFieldOptions } = useSelector(store => store.cvOptions);

  useEffect(() => {
    optionsDispatch(addOptions({ ...option }));
  }, [option]);

  useEffect(() => {
    if (fieldsState) {
      optionsDispatch(
        addFieldOptions({
          fieldsState,
          path,
          id,
        })
      );
    }
  }, [fieldsState]);

  const compileField = () => {
    const field = cv.data[path].find(item => item.id === id);

    return {
      ...field,
      options: cvCardOptions,
    };
  };

  const handleSaveClick = () => {
    optionsDispatch(
      addCvField({
        collectionId: cv.collectionId,
        [path]: compileField(),
      })
    );
  };

  return (
    <CvOptionsWrapper>
      <PreviewElem
        elem={cvOptions}
        path={path}
        options={cvCardOptions}
        setFieldsState={setFieldsState}
      />
      <OptionsPanel>
        <button onClick={handleSaveClick}>Save</button>
        <h2>Options</h2>
        <ColorPicker options={options} setOptions={setOptions} />
        <BorderOptions options={cvCardOptions} setOptions={setOptions} />
        <PositionOptions options={cvCardOptions} setOptions={setOptions} />
        <FieldOptions cvCardFieldOptions={cvCardFieldOptions} />
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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
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
