import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { BorderRadius } from './borderRadius';

export const BorderOptions = ({ options, setOptions }) => {
  const [toggleBorderMenu, setToggleBorderMenu] = useState(false);

  return (
    <BorderOptionsWrapper>
      <button onClick={() => setToggleBorderMenu(prev => !prev)}>Border</button>
      {toggleBorderMenu && (
        <ul>
          <BorderRadius options={options} setOptions={setOptions} />
        </ul>
      )}
    </BorderOptionsWrapper>
  );
};

export const BorderOptionsWrapper = styled.li`
  display: flex;
  flex-direction: column;
  & ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  & button {
    width: 100%;
  }
`;
