import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PositionColumnOptions } from './positionColumnOptions';

export const PositionOptionsFlex = ({ options, setOptions }) => {
  const [toggleButton, setToggleButton] = useState(options?.cardDirection || '');

  useEffect(() => {
    if (toggleButton) {
      setOptions(prev => ({
        ...prev,
        cardDirection: toggleButton,
      }));
    }
  }, [toggleButton]);

  return (
    <PositionOptionsFlexWrapper>
      <div className="direction_button">
        <button
          className={`positionButton ${toggleButton === 'row' ? 'active' : ''}`}
          onClick={() => setToggleButton('row')}
        >
          Row
        </button>
        <button
          className={`positionButton ${toggleButton === 'column' ? 'active' : ''}`}
          onClick={() => setToggleButton('column')}
        >
          Column
        </button>
      </div>
      {toggleButton === 'column' ? (
        <PositionColumnOptions options={options} setOptions={setOptions} />
      ) : (
        <div>Row</div>
      )}
    </PositionOptionsFlexWrapper>
  );
};

export const PositionOptionsFlexWrapper = styled.li`
  display: flex;
  flex-direction: column;
  & .direction_button {
    display: flex;
    width: 100%;
  }
  & .positionButton.active {
    background: green;
  }
`;
