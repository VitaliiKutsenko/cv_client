import styled from 'styled-components';

export const OptionsToolbarWrapper = styled.li`
  width: 100%;
  height: 100%;
  list-style: none;
`;
export const OptionsToolbarPanel = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  background: rgba(169, 169, 169, 0.5);
  border-radius: ${({ options }) =>
    options?.cvCard?.border?.borderRadius
      ? options?.cvCard?.border?.borderRadius +
        ' ' +
        options?.cvCard?.border?.borderRadius +
        ' ' +
        '0px' +
        ' ' +
        '0px'
      : '10px 10px 0 0'};
`;
