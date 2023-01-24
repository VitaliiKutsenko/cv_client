import React, { useEffect, useState } from 'react';

export const AdditionalFields = ({ getValues, additionalField }) => {
  const [addFields, setAddFields] = useState([]);

  console.log(addFields);

  useEffect(() => {
    if (additionalField) {
      setAddFields(prev => [...prev, additionalField]);
    }
  }, [additionalField]);

  const renderAdditionalList = () => {
    return addFields.map(field => {
      return <li key={field}>{field}</li>;
    });
  };

  return <ul>{renderAdditionalList()}</ul>;
};
