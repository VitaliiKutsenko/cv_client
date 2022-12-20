import React, { useCallback, useState } from 'react';
import { ChromePicker } from 'react-color';
import Background_SVG from '../../../../public/svg_options/Background_SVG.svg';
import { ColorPickerWrapper } from '../cvOptionsStyled';
import { ModalWindow } from '../../../modals/modalWindow';

export const ColorPicker = ({ options, setOptions }) => {
  const [color, setColor] = useState('#fff');
  const [showColor, setShowColor] = useState(false);
  const handleChangeComplete = color => {
    const rgba = color.rgb;
    const colorCreator = `rgba(${Object.values(rgba).toString()})`;

    setColor(colorCreator);

    setOptions(prev => {
      return {
        ...prev,
        cardBackground: colorCreator,
      };
    });
  };

  return (
    <ColorPickerWrapper>
      <span>Background color</span>
      <button onClick={() => setShowColor(prev => !prev)}>
        <Background_SVG />
      </button>
      {showColor && (
        <ModalWindow open={showColor} onClose={setShowColor}>
          <div
            className="color_picker"
            style={{
              height: 'fit-content',
              position: 'absolute',
              right: '0px',
              top: '70px',
            }}
          >
            <ChromePicker color={color} onChange={handleChangeComplete} />
          </div>
        </ModalWindow>
      )}
    </ColorPickerWrapper>
  );
};
