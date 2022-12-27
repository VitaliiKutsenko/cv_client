import React, { useRef, useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { MenuFormContent } from './formInput/menuFormContent';
import { FormHeader } from './formHeaderMenu/formHeader';
import styled from 'styled-components';

export const MenuForm = ({
  path,
  id,
  fieldsList,
  onSubmit,
  handleAdditionalField,
  handleRemoveAdditionalField,
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
      return <MenuFormContent path={path} key={field.id} id={id} fieldIndex={index} {...field} />;
    });
  };

  return (
    <FormProvider {...formMethods}>
      <ModalFormWrapper>
        <FormHeader
          id={id}
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

export const ModalFormWrapper = styled.div`
  height: inherit;
  width: 100%;
  & form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    & ul {
      width: 100%;
      height: 100%;
      max-height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      overflow: auto;
    }
    & .form_button__wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-self: flex-end;
      align-self: flex-end;
      justify-content: flex-end;
      flex-direction: row;
      & button {
        padding: 10px;
      }
    }
  }
`;
