import React from 'react';
import { ModalInputFormWrapper } from './modalInputFormStyle';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { FormButton } from '../../components/buttons/formButton';
import AddFields from '../../../../../public/svg_modal/AddFields.svg';
import { ModalInputFields } from './modalInputFields/modalInputFields';

export const ModalInputForm = props => {
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
        <ModalInputFields
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
