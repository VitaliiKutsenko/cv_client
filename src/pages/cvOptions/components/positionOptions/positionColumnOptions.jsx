import React, { useMemo } from 'react';

const radioList = [
  {
    id: 'ListStyleNone',
    values: 'none',
  },
  {
    id: 'ListStyleSquare',
    values: 'square',
  },
  {
    id: 'ListStyleCircle',
    values: 'circle',
  },
  {
    id: 'ListStyleNumber',
    values: 'number',
  },
];

export const PositionColumnOptions = ({ options, setOptions }) => {
  const handleChangeRadio = e => {
    const value = e.target.value;

    setOptions(prev => ({
      ...prev,
      listStyle: value,
    }));
  };

  const renderRadioList = useMemo(() => {
    return radioList.map(item => {
      return (
        <li key={item.id}>
          <label htmlFor={item.id}>{item.values}</label>
          <input
            id={item.id}
            type="radio"
            name="listStyle"
            value={item.values}
            defaultChecked={item.values === options?.listStyle ? true : false}
            onChange={handleChangeRadio}
          />
        </li>
      );
    });
  }, [radioList]);

  return <ul>{renderRadioList}</ul>;
};
