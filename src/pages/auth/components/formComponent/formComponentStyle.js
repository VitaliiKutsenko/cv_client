import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;

  & form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    & ul {
      list-style: none;
      //height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
  }
  @media (max-width: 703px) {
    & {
      margin-left: 20px;
      margin-right: 20px;
    }
    & h1 {
      font-size: 28px;
    }
  }
`;

export const FormHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & h2 {
    display: block;
    width: 100%;
  }
  & .form_header__wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  & p {
    margin: 10px 0;
    text-wrap: normal;
    text-align: left;
  }
`;
export const FormFooter = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
`;
