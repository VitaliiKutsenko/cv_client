import React, { useEffect, useState } from 'react';
import { CvHeaderWrapper } from './cvHeaderStyle';
import { CvCard } from '../cvCards/cvCard';

const orderTest = {
  skills: {
    gridOrder: '2',
    position: 'right',
  },
  photo: {
    gridOrder: '1',
    position: 'left',
  },
  hobbies: {
    gridOrder: '3',
    position: 'right',
  },
  about_my_self: {
    gridOrder: '4',
    position: 'left',
  },
  contact_info: {
    gridOrder: '5',
    position: 'right',
  },
  languages: {
    gridOrder: '6',
    position: 'left',
  },
  soft_skills: {
    gridOrder: '7',
    position: 'left',
  },
};

export const CvHeader = ({ content }) => {
  const data = content?.cv?.data;
  const [draggableElem, setDraggableElem] = useState('');
  const [order, setOrder] = useState({});

  useEffect(() => {
    setOrder(orderTest);
  }, [orderTest]);

  const renderForm = data => {
    return Object.entries(data || {}).map(item => {
      const [path, values] = item;

      return values.map(item => {
        return (
          <CvCard
            order={order}
            setOrder={setOrder}
            draggableElem={draggableElem}
            setDraggableElem={setDraggableElem}
            key={path}
            path={path}
            cardContents={{ ...item }}
          />
        );
      });
    });
  };

  return <CvHeaderWrapper>{renderForm(data)}</CvHeaderWrapper>;
};
