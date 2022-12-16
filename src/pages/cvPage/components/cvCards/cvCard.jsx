import React, { useContext, useState } from 'react';
import { CvCardWrapper } from './cvCardStyled';
import { CvCardFields } from './cvCardFields/cvCardFields';
import { OptionsToolbar } from './optionsToolBar/optionsToolbar';
import UserSpaceContext from '../../../../context/context';
import { UserPhotoCard } from './photoCard/userPhotoCard';
import { Reorder } from 'framer-motion';

const orderTest = [
  {
    path: 'skills',
    gridArea: '2',
  },
  {
    path: 'photo',
    gridArea: '1',
  },
  {
    path: 'hobbies',
    gridArea: '3',
  },
  {
    path: 'about_my_self',
    gridArea: '4',
  },
  {
    path: 'contact_info',
    gridArea: '5',
  },
  {
    path: 'languages',
    gridArea: '6',
  },
  {
    path: 'soft_skills',
    gridArea: '7',
  },
];

export const CvCard = ({ path, cardContents }) => {
  const { id, options, fields } = cardContents;
  const edit = useContext(UserSpaceContext);

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

  const [order, setOrder] = useState(orderTest);
  const [draggableElem, setDraggableElem] = useState(null);
  const dragStartHandler = e => {
    console.log(e, path);
    setDraggableElem(order.find(item => item.path === path));
  };

  const dragLeaveHandler = e => {};

  const dragOverHandler = e => {
    e.preventDefault();
  };

  const dragEndHandler = e => {};

  const dragDropHandler = e => {
    e.preventDefault();
    const current = order.find(item => item.path === path);

    // setOrder(
    //   order.map(item => {
    //     if (item.path === current.path) {
    //       return {
    //         ...item,
    //         gridArea: current.gridArea,
    //       };
    //     }
    //
    //     if (item.path === draggableElem.path) {
    //       return {
    //         ...item,
    //         gridArea: draggableElem.gridArea,
    //       };
    //     }
    //
    //     return item;
    //   })
    // );

    console.log(e, path);
  };

  return (
    <CvCardWrapper
      order={order.find(item => item.path === path)}
      options={options}
      className={path}
      draggable={true}
      onDragStart={dragStartHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}
      onDragEnd={dragEndHandler}
      onDrop={e => dragDropHandler(e)}
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
