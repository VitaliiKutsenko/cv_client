import styled from 'styled-components';

export const PhotoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
`;
export const PhotoCardPreview = styled.div`
  & .fill {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    //clip-path: circle(40%);

    overflow: hidden;
  }
  & .avatar {
    max-width: 300px;
    width: 100%;
    object-fit: cover;
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
