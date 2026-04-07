import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 21px;
  border-radius: 8px;
  border: 1px solid var(--bg-gray-darker);
  margin: 10px 0;
  text-align: center;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    text-align: left;

    @media screen and (min-width: 541px) {
      width: auto;
    }
  }

  input {
    padding: 6px 10px;
    background-color: var(--bg-gray);
    border-radius: 5px;
    transition: border 0.3s ease;
    cursor: text;

    &:focus {
      border: 2px solid var(--bg-gray-darker);
    }
  }

  button {
    border-radius: 5px;
    padding: 7px 14px;
    background-color: var(--blue-600);
    color: white;
  }

  a {
    color: var(--blue-600);
    font-weight: 600;
  }
`;

export default LoginFormStyled;
