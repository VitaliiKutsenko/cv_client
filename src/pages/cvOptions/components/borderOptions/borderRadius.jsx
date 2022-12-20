import React, { useCallback } from 'react';
import styled from 'styled-components';

export const BorderRadius = ({ options, setOptions }) => {
  const handleBorderRadius = useCallback(
    e => {
      const rangeValue = e.target.value;
      const border = rangeValue;

      setOptions(prev => {
        return {
          ...prev,
          cardBorderRadius: border,
        };
      });
    },
    [options]
  );

  return (
    <BorderRadiusWrapper>
      <label>Border radius</label>
      <input
        type="range"
        defaultValue={+options?.cardBorderRadius || 0}
        min={0}
        max={20}
        step={2}
        onChange={handleBorderRadius}
      />
      <span>{options?.cardBorderRadius}</span>
    </BorderRadiusWrapper>
  );
};

export const BorderRadiusWrapper = styled.li`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  & * {
    display: block;
    width: 100%;
  }
`;
