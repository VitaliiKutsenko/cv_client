import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { DataPickerWrapper } from './dataPickerStyled';

export const DataPicker = ({ control, name, placeholder, inputId, setFocus }) => {
  const [dateToggle, setDateToggle] = useState(false);

  return (
    <DataPickerWrapper dateToggle={dateToggle}>
      <Controller
        id={inputId}
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <ReactDatePicker
              className={inputId}
              placeholderText={placeholder}
              onChange={e => field.onChange(e)}
              selected={field.value ? new Date(field.value) : field.value}
              showYearDropdown
              fixedHeight
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          );
        }}
      />
    </DataPickerWrapper>
  );
};
