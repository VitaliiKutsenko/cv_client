import React, { useState } from 'react';
import { CvHeaderWrapper } from './cvHeaderStyle';
import { CvCard } from '../cvCards/cvCard';
import { Reorder } from 'framer-motion';

export const CvHeader = ({ content }) => {
  const data = content?.cv?.data;

  const renderForm = data => {
    return Object.entries(data || {}).map(item => {
      const [path, values] = item;

      return values.map(item => {
        return <CvCard key={path} path={path} cardContents={{ ...item }} />;
      });
    });
  };

  return <CvHeaderWrapper>{renderForm(data)}</CvHeaderWrapper>;
};
