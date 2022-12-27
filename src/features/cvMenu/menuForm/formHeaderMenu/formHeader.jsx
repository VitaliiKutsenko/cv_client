import React from 'react';
import { FormButton } from '../../components/buttons/formButton';
import HideArrow from '../../../../../public/svg_modal/HideArrow.svg';
import AddForm from '../../../../../public/svg_modal/AddForm.svg';
import RemoveFormField from '../../../../../public/svg_modal/RemoveFormField.svg';
import SettingsField from '../../../../../public/svg_modal/SettingsField.svg';

import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const FormHeader = ({ handleAdditionalField, handleRemoveAdditionalField, label, id }) => {
  return (
    <FormHeaderWrapper>
      <div className="header_label">
        <span>{label}</span>
      </div>
      <div className="button_menu">
        {id === 1 && (
          <FormButton fillColor="green" onClick={handleAdditionalField} content={<AddForm />} />
        )}
        {id > 1 && (
          <FormButton
            fillColor="tomato"
            content={<RemoveFormField />}
            onClick={() => handleRemoveAdditionalField(id)}
          />
        )}

        <FormButton fillColor="blue" content={<SettingsField />} />
      </div>
    </FormHeaderWrapper>
  );
};

export const FormHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-left: none;
  border-right: none;

  & .header_label {
    margin: 10px;
  }

  & .button_menu {
    display: flex;

    & button {
      margin: 5px 10px;
      border-radius: ${theme.border || 0};

      &:hover svg {
        transform: rotateY(180deg);
      }
    }
  }
`;
