import styled from 'styled-components';

export const CvCardFieldsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  list-style: none;
  margin: 10px;
  display: flex;
  flex-direction: ${({ options }) => options?.position || 'row'};
  align-items: flex-start;
  //background: ${({ options }) => options?.background || 'transparent'};
  & .label {
    justify-self: flex-start;
  }
`;

export const CardListContainer = styled.ul`
  //width: 100%;
  height: fit-content;
  //border: 1px solid black;
  list-style: none;
  display: flex;
`;

export const CardList = styled.li`
  width: fit-content;
  padding: 5px;
  border-radius: 10px;
  height: fit-content;
  border: 1px solid black;
  list-style: none;
  margin: 10px;
  background: white;
`;
