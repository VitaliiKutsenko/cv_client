import React from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { MenuFormContent } from './formInput/menuFormContent';
import { FormHeader } from './formHeaderMenu/formHeader';
import { ModalFormWrapper } from './menuFormStyled';
import { MenuFields } from './menuFields/menuFields';

export const MenuForm = props => {
  const { id, fields } = props;
  const { handleSubmit, register, control, resetField } = useForm({ mode: 'onSubmit' });

  const getSubmitData = inputField => {
    // props.onSubmit(item);
    console.log(inputField);
  };

  const renderEditCards = (fields = []) => {
    return fields.map((field, index) => {
      return (
        <MenuFields
          key={index}
          register={register}
          control={control}
          resetField={resetField}
          date={false}
          {...field}
        />
      );
    });
  };

  return (
    <ModalFormWrapper>
      <FormHeader
        id={id}
        handleAdditionalField={props.handleAdditionalField}
        handleRemoveAdditionalField={props.handleRemoveAdditionalField}
      />
      <form onSubmit={handleSubmit(getSubmitData)}>
        <ul>{renderEditCards(fields)}</ul>
        <input type="submit" value="Confirm" />
      </form>
    </ModalFormWrapper>
  );
};
