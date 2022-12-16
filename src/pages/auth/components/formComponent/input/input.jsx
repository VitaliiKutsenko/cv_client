import React, { useState } from 'react';
import { InputFormButton, InputFormError, InputFormWrapper, InputWrapper } from './inputStyle';
import Hide from '../../../../../../public/svg/Hide.svg';
import Show from '../../../../../../public/svg/Show.svg';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { DataPicker } from '../../../../../components/dataPicker/dataPicker';

export const Input = ({ inputType, labelText, register, control, errors, ...props }) => {
  const [iconState, setIconState] = useState(false);
  const registerId = labelText.toLowerCase();
  const inputId = uniqid();
  const iconTrigger = e => {
    e.preventDefault();
    setIconState(!iconState);
  };

  const [focus, setFocus] = useState(false);

  return (
    <InputFormWrapper {...props}>
      <label className={`label ${focus ? 'active' : ''}`} htmlFor={inputId}>
        {labelText}
      </label>
      {errors[registerId]?.error && <InputFormError>{errors[registerId]?.message}</InputFormError>}
      <InputWrapper className={`label ${focus ? 'active' : ''}`} {...props}>
        {inputType === 'date' ? (
          <DataPicker
            control={control}
            name={labelText.toLowerCase()}
            id={inputId}
            labelText={labelText}
            setFocus={setFocus}
          />
        ) : (
          <>
            <input
              id={inputId}
              autoComplete="off"
              type={(iconState && 'text') || inputType}
              {...register(registerId)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </>
        )}
        {inputType === 'password' ? (
          <InputFormButton
            className={`buttonPass ${!iconState ? 'hide' : 'show'}`}
            onClick={e => iconTrigger(e)}
          >
            {iconState ? <Hide /> : <Show />}
          </InputFormButton>
        ) : (
          <div className="plug"></div>
        )}
      </InputWrapper>
    </InputFormWrapper>
  );
};

Input.propType = {
  inputType: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
};
