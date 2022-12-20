import React from 'react';
import { CvCard } from './cvCard';

export const RenderCards = ({ content }) => {
  const renderForm = data => {
    return Object.entries(data || []).map(item => {
      const [path, values] = item;

      return values.map(item => {
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
