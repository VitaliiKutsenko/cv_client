import React from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { FormButton } from '../../components/buttons/formButton';
import AddFields from '../../../../../public/svg_modal/AddFields.svg';
import { MenuFormInput } from './modalInputFields/menuFormInput';
import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const MenuFormContent = props => {
  const { control, getValues } = useFormContext();

  const fieldName = useWatch({
    name: `${props.path}.${props.fieldIndex}.name`,
    control,
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: `${props.path}.${props.fieldIndex}.values`,
  });
  const addProfileHandler = () => {
    append({ value: '' });
  };

  const showAddButton = () => {
    const fieldPath = `${props.path}.${props.fieldIndex}.values`;

    return props.multi || !getValues(fieldPath).length;
  };

  const renderModalInputFields = fields => {
    return fields.map((field, index) => {
      return (
        <MenuFormInput
          remove={remove}
          inputIndex={index}
          key={field.id}
          {...props}
          {...field}
          name={`${props.path}.${props.fieldIndex}.values.${index}.value`}
        />
      );
    });
  };

  return (
    <ModalInputFormWrapper>
      <div className="modalFields_header">
        <span>{fieldName}</span>
        {showAddButton() && (
          <FormButton
            fillColor="green"
            type="button"
            onClick={addProfileHandler}
            content={<AddFields />}
            info="Add new field"
          />
        )}
      </div>
      <ul className="modalFields_inputWrapper">{renderModalInputFields(fields)}</ul>
    </ModalInputFormWrapper>
  );
};

export const ModalInputFormWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${theme.border};
  padding: 10px;
  margin: 10px;
  width: 40%;
  height: fit-content;
  min-width: 350px;

  & .modalFields_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .modalFields_inputWrapper {
    height: fit-content;
    width: 100%;
    overflow: hidden;
  }
`;
