import React, { useState } from 'react';
import styled from 'styled-components';
import { BorderOptionsWrapper } from '../borderOptions/borderOptions';
import { PositionOptionsFlex } from './positionOptionsFlex';

export const PositionOptions = ({ options, setOptions }) => {
  const [togglePosition, setTogglePosition] = useState(false);

  return (
    <PositionOptionsWrapper>
      <button onClick={() => setTogglePosition(prev => !prev)}>Position</button>
      {togglePosition && (
        <ul>
          <PositionOptionsFlex options={options} setOptions={setOptions} />
        </ul>
      )}
    </PositionOptionsWrapper>
  );
};

export const PositionOptionsWrapper = styled(BorderOptionsWrapper)``;
