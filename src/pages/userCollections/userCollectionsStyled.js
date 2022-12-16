import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const CvCollectionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background: ${theme.colors.darkGrey};
  & .collections_title {
    color: white;
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
  & .collections_menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const CollectionsWindow = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: auto;
  & li {
    background: ${theme.colors.lightBlack};
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    max-width: 90%;
    height: fit-content;
    border-radius: 10px;
    padding: 10px;

    & .collection_main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & button {
        background: transparent;
        border: none;
        width: fit-content;
        height: fit-content;
        &:hover {
          fill: red;
        }
      }
    }
    & .collection_footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    & svg {
      margin: 5px;
      width: 24px;
      height: 24px;
    }
  }
`;
export const CollectionsToolbarWrapper = styled.div`
  &,
  * {
    border-radius: ${theme.border};
  }

  background: rgba(109, 109, 109, 0.5);
  display: flex;
  width: fit-content;
  height: fit-content;
  position: relative;
  align-self: center;
  box-shadow: 0 0 2px 0 black;

  & .collection_inputArea {
    width: auto;
    height: auto;
    background: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    & input {
      width: 100%;
      height: 100%;
      outline: none;
      padding: 5px;
      margin: 10px 0;
    }

    & button {
      padding: 5px;
      border: none;
      box-shadow: 0 0 3px -1px black;
    }
  }
`;
