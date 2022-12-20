import styled from 'styled-components';

export const PhotoCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PhotoCardPreview = styled.div`
  & .fill {
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  & .fill img {
    object-fit: cover;
    width: 200px;
    max-height: 200px;
    border-radius: 50%;
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
