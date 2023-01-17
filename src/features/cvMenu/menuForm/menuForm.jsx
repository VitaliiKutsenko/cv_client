import React from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { MenuFormContent } from './formInput/menuFormContent';
import { FormHeader } from './formHeaderMenu/formHeader';
import { ModalFormWrapper } from './menuFormStyled';

export const MenuForm = props => {
  const { path, id, fieldsList, initialItem } = props;
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

    props.onSubmit(item);
  };

  const renderEditCards = (fields = []) => {
    return fields.map((field, index) => {
      return <MenuFormContent path={path} key={field.id} id={id} fieldIndex={index} {...field} />;
    });
  };

  return (
    <ModalFormWrapper>
      <FormHeader
        id={id}
        handleAdditionalField={props.handleAdditionalField}
        handleRemoveAdditionalField={props.handleRemoveAdditionalField}
      />
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(getSubmitData)}>
          <ul>{renderEditCards(fields)}</ul>
          <input type="submit" value="Confirm" />
        </form>
      </FormProvider>
    </ModalFormWrapper>
  );
};
