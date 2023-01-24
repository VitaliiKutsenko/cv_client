import React, { useState } from 'react';
import { InputFormWrapper, MenuFieldsWrapper, ModalInputFieldsWrapper } from './menuFieldsStyled';
import { Controller } from 'react-hook-form';

import TextareaAutosize from 'react-textarea-autosize';
import ReactDatePicker from 'react-datepicker';
import { AdditionalFields } from '../additionalFields';

export const MenuFields = props => {
  const [additionalFields, setAdditionalFields] = useState('');
  const { register, control, date, getValues } = props;

  const renderDateInput = () => {
    return (
      <Controller
        control={control}
        id={props.point}
        name={props.point}
        render={({ field }) => {
          return (
            <ReactDatePicker
              className="input"
              placeholderText="Select date"
              onChange={e => field.onChange(e)}
              selected={field.value ? new Date(field.value) : field.value}
              showYearDropdown
            />
          );
        }}
      />
    );
  };

  const renderTextInput = () => {
    return (
      <TextareaAutosize
        id={props.point}
        minRows="1"
        autoComplete="off"
        {...register(`${props.point}.0`, {
          required: 'Заполните поле',
          minLength: 3,
        })}
      />
    );
  };

  const handleAddNewField = () => {
    const value = getValues(props.point);

    setAdditionalFields(value);
  };

  return (
    <MenuFieldsWrapper>
      <ModalInputFieldsWrapper>
        <AdditionalFields additionalField={additionalFields} name={props.point} />
        <label htmlFor={props.point}>{props.titleText}</label>
        <InputFormWrapper>{date ? renderDateInput() : renderTextInput()}</InputFormWrapper>
        <button onClick={handleAddNewField}>add</button>
      </ModalInputFieldsWrapper>
    </MenuFieldsWrapper>
  );
};
