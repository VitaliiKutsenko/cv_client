import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFormContext } from 'react-hook-form';
import { InputFormWrapper, ModalInputFieldsWrapper } from './modalInputFieldsStyled';
import { FormButton } from '../../../components/buttons/formButton';
import { Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import RemoveFields from '../../../../../../public/svg_modal/RemoveFields.svg';
import ClearFields from '../../../../../../public/svg_modal/ClearFields.svg';

export const MenuFormInput = ({ inputIndex, name, date, remove, ...props }) => {
  const { register, control, resetField } = useFormContext();

  const removeFieldHandler = () => {
    remove(inputIndex);
  };

  const handleClearFields = () => {
    resetField(name);
  };

  return (
    <ModalInputFieldsWrapper>
      <InputFormWrapper>
        {!date && (
          <TextareaAutosize
            minRows="1"
            autoComplete="off"
            {...register(name, {
              required: 'Заполните поле',
              minLength: 3,
            })}
          />
        )}
        {date && (
          <Controller
            control={control}
            name={name}
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
        )}
        <FormButton onClick={handleClearFields} info="Remove" content={<ClearFields />} />
      </InputFormWrapper>
      <FormButton onClick={removeFieldHandler} info="Remove" content={<RemoveFields />} />
    </ModalInputFieldsWrapper>
  );
};
