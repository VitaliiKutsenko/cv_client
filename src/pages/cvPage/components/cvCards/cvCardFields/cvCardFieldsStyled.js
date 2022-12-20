import styled from 'styled-components';

export const CvCardFieldsWrapper = styled.li`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: ${({ fieldOptions }) => fieldOptions.position || 'row'};
  align-items: flex-start;
  border-radius: 1px;
  margin-top: 5px;

  & .label {
    padding: 5px;
    width: 30%;
    min-width: fit-content;
    display: flex;
    align-self: flex-start;
    height: 100%;
    margin: 5px;
  }

  &:hover {
    background: ${({ setFieldsState }) =>
      setFieldsState ? 'rgba(182, 182, 182, 0.5)' : 'transparent'};
  }

  &.skills {
    & ol {
      display: flex;
      flex-direction: row;
      width: fit-content;

      & li {
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
      }
    }
  }

  &.employment {
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
    align-items: center;

    &:nth-child(4) {
      flex-direction: column;

      & ol {
        margin-left: 10px;
        align-self: flex-start;
      }

      & ol li:before {
        left: -5px;
        top: calc(15px / 2);
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        box-shadow: inset 0 0 1px 1px black;
        border-radius: 50%;
      }
    }

    & ol {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: fit-content;

      & li {
        position: relative;
        box-shadow: none;
      }
    }
  }
`;

export const CardListContainer = styled.ol`
  width: 100%;
  height: fit-content;
  list-style: ${({ options }) => options?.listStyle || 'none'};
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ options }) => options?.cardDirection || 'row'};
`;

export const CardList = styled.li`
  width: content-box;
  padding: 3px;
  border-radius: 3px;
  height: fit-content;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  background: white;
  margin: 5px;
  height: 100%;
`;

export const DateList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
