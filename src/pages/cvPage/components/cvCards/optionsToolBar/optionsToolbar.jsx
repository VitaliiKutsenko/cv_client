import React from 'react';
import SettingsField from '../../../../../../public/svg_modal/SettingsField.svg';
import { OptionsToolbarPanel, OptionsToolbarWrapper } from './optionsToolbarStyled';
import { useNavigate } from 'react-router-dom';

export const OptionsToolbar = ({ edit, setEdit, path, id, options, children }) => {
  const navigate = useNavigate();
  const handleOptions = () => {
    navigate('options', {
      state: {
        path,
        id,
        options,
      },
    });
  };

  return (
    <OptionsToolbarWrapper options={options}>
      {edit && (
        <OptionsToolbarPanel options={options}>
          <button onClick={handleOptions}>
            <SettingsField />
          </button>
          {/*<button onClick={() => setEdit(prev => !prev)}>X</button>*/}
        </OptionsToolbarPanel>
      )}
      {children}
    </OptionsToolbarWrapper>
  );
};
