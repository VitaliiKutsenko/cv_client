import styled from 'styled-components';

export const CvCardFieldsWrapper = styled.li`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: ${({ fieldOptions }) => fieldOptions.position || 'row'};
  align-items: flex-start;
  border-radius: 1px;
  margin-top: 5px;

  &:hover {
    background: ${({ setFieldsState }) =>
      setFieldsState ? 'rgba(182, 182, 182, 0.5)' : 'transparent'};
  }

  & .label {
    padding: 5px;
    width: 30%;
    min-width: fit-content;
    display: flex;
    align-self: flex-start;
    height: 100%;
    margin: 5px;
  }

  //HARDCODE STYLE
  &.skills,
  &.languages,
  &.soft_skills,
  &.hobbies {
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
    box-shadow: 0 0 1px 1px rgba(116, 116, 116, 0.5);
    align-items: center;
    border-radius: 5px;
    &:nth-child(6) {
      flex-direction: column;

      & ol {
        margin-left: 10px;
        align-self: flex-start;
      }

      & ol li:before {
        left: -10px;
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

  &.about_my_self {
    & ol li:before {
      left: -10px;
      top: calc(15px / 2);
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      box-shadow: inset 0 0 1px 1px black;
      border-radius: 50%;
    }

    & ol {
      display: flex;
      flex-direction: row;
      width: fit-content;

      & li {
        box-shadow: none;
        position: relative;
      }
    }
  }

  &.education {
    box-shadow: 0 0 1px 1px rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    & .label {
      margin: 0;
    }
    & ol {
      display: flex;
      flex-direction: row;
      width: fit-content;

      & li {
        box-shadow: none;
        position: relative;
        margin: 0;
      }
    }
  }
  &.contact_info {
    box-shadow: 0 0 1px 1px rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    & .label {
      margin: 0;
    }
    & ol {
      & li {
        width: 100%;
        overflow-wrap: break-word;
        box-shadow: none;
        margin: 0;
      }
    }
  }
`;

export const CardListContainer = styled.ol`
  width: 100%;
  height: 100%;
  list-style: ${({ options }) => options?.listStyle || 'none'};
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ options }) => options?.cardDirection || 'row'};
`;

export const CardList = styled.li`
  width: content-box;
  padding: 5px;
  border-radius: 5px;
  justify-self: center;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  background: white;
  margin: 5px;
  height: fit-content;
`;

export const DateList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
