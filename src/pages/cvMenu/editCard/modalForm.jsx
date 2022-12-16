import React, { useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { ModalInputForm } from './formInput/modalInputForm';
import { ModalFormWrapper } from './modalFormStyled';

import { FormHeader } from './formHeaderMenu/formHeader';

export const ModalForm = ({
  path,
  id,
  fieldsList,
  onSubmit,
  handleAdditionalField,
  handleRemoveAdditionalField,
  labelText,
  theme,
  initialItem,
}) => {
  const formMethods = useForm({
    mode: 'onSubmit',
    defaultValues: { [path]: fieldsList },
  });

  const { control, handleSubmit } = formMethods;
  const { fields } = useFieldArray({
    control,
    name: path,
  });

  const getSubmitData = inputField => {
    const combineFields = initialItem.find(item => item.id === id);
    const item = {
      [path]: {
        ...combineFields,
        fields: inputField[path],
      },
    };

    onSubmit(item);
  };

  const renderEditCards = (fields = []) => {
    return fields.map((field, index) => {
      return <ModalInputForm path={path} key={field.id} id={id} fieldIndex={index} {...field} />;
    });
  };

  return (
    <FormProvider {...formMethods}>
      <ModalFormWrapper themes={theme}>
        <FormHeader
          id={id}
          themes={theme}
          label={labelText}
          handleAdditionalField={handleAdditionalField}
          handleRemoveAdditionalField={handleRemoveAdditionalField}
        />
        <form onSubmit={handleSubmit(getSubmitData)}>
          <ul>{renderEditCards(fields)}</ul>
          <div className="form_button__wrapper">
            <button type="submit">Confirm</button>
          </div>
        </form>
      </ModalFormWrapper>
    </FormProvider>
  );
};
