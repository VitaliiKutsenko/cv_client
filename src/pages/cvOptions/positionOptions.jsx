import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

export const PositionOptions = ({ options, setOptions }) => {
  const handleBorderRadius = useCallback(e => {
    const rangeValue = e.target.value;
    const border = { borderRadius: `${rangeValue}px` };

    setOptions(prev => {
      return {
        ...prev,
        cvCard: {
          ...prev?.cvCard,
          border: {
            ...prev?.cvCard?.border,
            border,
          },
        },
      };
    });
  }, []);

  return (
    <PositionOptionsWrapper>
      <li>
        <label>Border radius</label>
        <input
          type="range"
          defaultValue={options?.cvCard?.border?.borderRadius || 0}
          min={0}
          max={20}
          step={2}
          onChange={handleBorderRadius}
        />
        <span>{options?.cvCard?.border?.borderRadius}</span>
      </li>
    </PositionOptionsWrapper>
  );
};

export const PositionOptionsWrapper = styled.ul``;
