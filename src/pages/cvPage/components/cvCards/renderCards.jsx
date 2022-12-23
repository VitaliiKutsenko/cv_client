import React from 'react';
import { CvCard } from './cvCard';

export const RenderCards = ({ content }) => {
  const renderForm = data => {
    return Object.entries(data || []).map(item => {
      const [path, values] = item;

      const sortCvField = values.sort((a, b) => a.id - b.id);

      return sortCvField.map(item => {
        return (
          <CvCard
            key={`${path}_${item.id}`}
            path={path}
            options={item?.options}
            cardContents={{ ...item }}
          />
        );
      });
    });
  };

  return renderForm(content);
};
