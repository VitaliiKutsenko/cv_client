import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFormContext } from 'react-hook-form';
import { ModalInputFieldsWrapper } from './modalInputFieldsStyled';
import { FormButton } from '../../../components/buttons/formButton';
import { Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import RemoveFields from '../../../../../../public/svg_modal/RemoveFields.svg';
import { debounce } from '../../../helper/modalHelper';
import CheckDone from '../../../../../../public/svg_modal/CheckDone.svg';

export const ModalInputFields = ({ inputIndex, name, date, remove, ...props }) => {
  const { register, control } = useFormContext();

  const [check, setCheck] = useState(false);
  const removeFieldHandler = () => {
    remove(inputIndex);
  };

  const [doneCounter, setDoneCounter] = useState(0);
  const handleBlur = debounce(e => {
    const target = e.target.value;

    if (target.length > 3) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, 300);

  useEffect(() => {
    if (check) {
      setDoneCounter(prev => prev + 1);
    }

    if (!check && doneCounter > 0) {
      setDoneCounter(prev => prev - 1);
    }
  }, [check]);

  return (
    <ModalInputFieldsWrapper>
      <div className={`input_wrapper ${check ? 'done' : 'false'}`}>
        {!date && (
          <TextareaAutosize
            minRows="1"
            autoComplete="off"
            {...register(name, {
              required: 'Заполните поле',
              minLength: 3,
              onChange: e => handleBlur(e),
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
        <div className="input_status">{<CheckDone />}</div>
      </div>
      <FormButton onClick={removeFieldHandler} info="Remove" content={<RemoveFields />} />
    </ModalInputFieldsWrapper>
  );
};
