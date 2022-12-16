import React, { useEffect, useState } from 'react';
import { ErrorModalWrapper } from './errorModalStyled';
import { useSelector } from 'react-redux';
import RemoveFields from '../../../../../public/svg_modal/RemoveFields.svg';

export const ErrorModal = ({ errors }) => {
  const [errorWindow, setErrorWindow] = useState(false);
  const store = useSelector(store => store);

  useEffect(() => {
    if (errors?.message) {
      setErrorWindow(true);
    } else {
      setErrorWindow(false);
    }
  }, [errors]);

  const handleRemoveErrorWindow = () => {
    setErrorWindow(false);
  };

  return (
    <ErrorModalWrapper>
      {errorWindow && (
        <div className="errorWrapper">
          <p>{`${errors?.name}: ${errors?.message}`}</p>
          <button onClick={handleRemoveErrorWindow}>
            <RemoveFields />
          </button>
        </div>
      )}
    </ErrorModalWrapper>
  );
};
