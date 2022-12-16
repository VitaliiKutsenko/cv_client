import React, { useEffect, useState } from 'react';
import { CvOptionsWrapper, OptionsPanel } from './cvOptionsStyled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ColorPicker } from './colorPicker';
import { useDispatch, useSelector } from 'react-redux';
import { addCvField, changeOptions } from '../../store/cv/userCv/userCvActions';
import { PositionOptions } from './positionOptions';

export const CvOptions = ({}) => {
  const navigateToMain = useNavigate();
  const location = useLocation();
  const { path, id, options } = location.state;
  const optionsDispatch = useDispatch();

  console.log(options);
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

  return (
    <CvOptionsWrapper className={'modal_wrapper'} onClick={modalHandler}>
      <OptionsPanel>
        <button onClick={handleSaveClick}>Save</button>
        <h2>Options</h2>
        <li>
          <ColorPicker options={options} setOptions={setOptions} />
        </li>
        <li>
          <PositionOptions options={options} setOptions={setOptions} />
        </li>
      </OptionsPanel>
    </CvOptionsWrapper>
  );
};
