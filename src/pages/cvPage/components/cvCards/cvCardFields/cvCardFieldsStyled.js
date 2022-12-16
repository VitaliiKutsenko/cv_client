import styled from 'styled-components';

export const CvCardFieldsWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  list-style: none;
  margin: 10px;
  display: flex;
  flex-direction: ${({ options }) => options?.position || 'column'};
  align-items: center;
  background: ${({ options }) => options?.background || 'transparent'};
`;

export const CardListContainer = styled.ul`
  width: fit-content;
  height: fit-content;
  border: 1px solid black;
  list-style: none;
  background: white;
`;

export const CardList = styled.li`
  width: fit-content;
  height: fit-content;
  border: 1px solid black;
  list-style: none;
  margin: 10px;
  background: white;
`;
