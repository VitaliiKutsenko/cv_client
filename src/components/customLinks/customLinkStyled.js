import styled from 'styled-components';

export const NavLinksWrapper = styled.div`
  padding: 2px;
  max-width: fit-content;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & a {
    position: relative;
    font-size: 18px;
    text-decoration: none;
    color: ${({ color }) => color || 'rgba(0,0,0,0.5)'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    &.active {
      color: ${({ activeColor }) => activeColor || 'black'};
    }
  }
  & a::before {
    content: '';
    width: 0;
    border-bottom: 2px inset ${({ color }) => color || 'rgba(0,0,0,0.2)'};
    bottom: 0;
    position: absolute;
    transition: 0.3s linear;
  }

  & a:hover::before {
    transition: 0.3s linear;
    width: 100%;
  }
`;
