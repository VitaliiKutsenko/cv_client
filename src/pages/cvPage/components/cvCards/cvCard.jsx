import React, { useContext, useRef, useState } from 'react';
import { CvCardWrapper } from './cvCardStyled';
import { CvCardFields } from './cvCardFields/cvCardFields';
import { OptionsToolbar } from './optionsToolBar/optionsToolbar';
import UserSpaceContext from '../../../../context/context';
import { UserPhotoCard } from './photoCard/userPhotoCard';

export const CvCard = ({
  path,
  cardContents,
  draggableElem,
  setDraggableElem,
  order,
  setOrder,
}) => {
  const { id, options, fields } = cardContents;
  const edit = useContext(UserSpaceContext);

  const dragStartHandler = (e, area) => {
    setDraggableElem({ [path]: area });
  };

  const dragLeaveHandler = e => {};

  const dragOverHandler = (e, path) => {
    e.preventDefault();
  };

  const dragEndHandler = e => {};

  const dragDropHandler = (e, area) => {
    e.preventDefault();
    const [keys] = Object.keys(draggableElem);
    const swapElem = {
      [path]: draggableElem[keys],
      [keys]: area,
    };

    setOrder({
      ...order,
      ...swapElem,
    });
  };

  const renderCvCard = () => {
    return fields.map(field => {
      const keyCreator = field?.name.toLowerCase().split(' ').join('_');

      if (field.name === 'Photo') {
        return <UserPhotoCard key={keyCreator} cardFields={field} />;
      }

      if (field.name !== 'Photo') {
        return <CvCardFields options={options} key={keyCreator} cardFields={field} />;
      }
    });
  };

  return (
    <CvCardWrapper
      order={order[path]}
      options={options}
      draggable={true}
      onDragStart={e => dragStartHandler(e, order[path])}
      onDragOver={e => dragOverHandler(e)}
      onDrop={e => dragDropHandler(e, order[path])}
      onDragLeave={dragLeaveHandler}
      onDragEnd={dragEndHandler}
    >
      <OptionsToolbar edit={edit} id={id} options={options} path={path}>
        {renderCvCard()}
      </OptionsToolbar>
    </CvCardWrapper>
  );
};

const arr = [
  'photo',
  'soft_skills',
  'languages',
  'hobbies',
  'about_my_self',
  'contact_info',
  'skills',
];
