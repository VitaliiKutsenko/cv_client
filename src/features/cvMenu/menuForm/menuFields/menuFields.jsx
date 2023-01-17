import React from 'react';
import { MenuFieldsWrapper } from './menuFieldsStyled';
import { Controller } from 'react-hook-form';
import {
  InputFormWrapper,
  ModalInputFieldsWrapper,
} from '../formInput/modalInputFields/modalInputFieldsStyled';
import TextareaAutosize from 'react-textarea-autosize';
import ReactDatePicker from 'react-datepicker';

export const MenuFields = props => {
  const { register, control, date } = props;

  console.log(props);

  return (
    <MenuFieldsWrapper>
      <ModalInputFieldsWrapper>
        <InputFormWrapper>
          {date ? (
            <Controller
              control={control}
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
          ) : (
            <TextareaAutosize
              minRows="1"
              autoComplete="off"
              {...register(props.point, {
                required: 'Заполните поле',
                minLength: 3,
              })}
            />
          )}
        </InputFormWrapper>
      </ModalInputFieldsWrapper>
    </MenuFieldsWrapper>
  );
};
