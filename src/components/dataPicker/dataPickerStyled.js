import styled from 'styled-components';

export const DataPickerWrapper = styled.div.attrs(props => {
  return { toggle: props.dateToggle };
})`
  position: relative;
`;
