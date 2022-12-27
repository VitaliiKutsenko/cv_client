import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme/theme';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const CvHeader = ({}) => {
  const headerStore = useSelector(store => store.userCv.cv);
  const navigate = useNavigate();
  const handleAddHeaderInfo = () => {
    navigate('menu/profile');
  };

  return (
    <CvHeaderWrapper>
      <button onClick={handleAddHeaderInfo}>add</button>
    </CvHeaderWrapper>
  );
};

export const CvHeaderWrapper = styled.header`
  width: 30%;
  height: 100%;
  background: ${theme.colors.mateWhite};
  box-shadow: 0 0 1px 1px black;
  border-radius: 3px;
`;
