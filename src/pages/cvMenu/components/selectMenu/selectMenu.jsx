import React, { useCallback, useState } from 'react';
import { SelectMenuWrapper, SelectTriggerWrapper } from './selectMenuStyled';
import { selectMenuFields } from './selectMenuFields';
import SelectArrow from '../../../../../public/svg_modal/SelectArrow.svg';

export const SelectMenu = ({ setModalContent }) => {
  const [active, setActive] = useState('');

  const listHandler = useCallback(e => {
    const currentLabel = e.target.innerText;
    const pathCreator = currentLabel
      .split(' ')
      .map(path => path.toLowerCase())
      .join('_');

    setModalContent(pathCreator);

    setActive(currentLabel);
  }, []);

  const renderSelectList = listFields => {
    return listFields.map(({ field, theme }, index) => {
      return (
        <SelectTriggerWrapper
          key={index}
          theme={theme}
          className={`select_lists ${field === active ? 'active' : ''}`}
          onClick={listHandler}
        >
          {field}
          <SelectArrow />
        </SelectTriggerWrapper>
      );
    });
  };

  return <SelectMenuWrapper>{renderSelectList(selectMenuFields)}</SelectMenuWrapper>;
};
