import styled from 'styled-components';

export const PhotoCardWrapper = styled.div`
  width: fit-content;
  max-width: 500px;
`;
export const PhotoCard_preview = styled.div`
  width: 450px;
  & img {
    display: flex;
    width: 100%;
    height: auto;
  }
`;
export const PhotoCard_loadField = styled.div`
  width: fit-content;
  & input.hidden {
    opacity: 0;
    height: 0;
    width: 0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
`;
