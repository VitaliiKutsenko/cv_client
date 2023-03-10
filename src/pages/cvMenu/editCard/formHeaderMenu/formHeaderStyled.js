import styled from 'styled-components';
import { theme } from '../../../../style/theme/theme';

export const FormHeaderWrapper = styled.div.attrs(props => {
  return {
    borderRadius: props.showForm ? '10px 10px 0 0' : '10px',
    colors: props.themes,
  };
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    white 20%,

    ${({ color }) => color || 'gray'}
  );
  border-radius: ${props => props.borderRadius || 0};

  & .header_label {
    margin: 10px;
  }

  & .button_menu {
    display: flex;
    padding: 5px;

    & button {
      margin: 10px;
      border-radius: ${theme.border || 0};

      &:hover svg {
        transform: rotateY(180deg);
      }
    }
  }
`;
