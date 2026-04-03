import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 21px;
  border-radius: 8px;
  border: 1px solid var(--bg-gray-darker);

  & div {
    display: flex;
    gap: 16px;
    a {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 5px;
      border: 1px solid var(--bg-gray-darker);
      border-radius: 8px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: var(--bg-gray-darker);
      }
    }
  }

  & ul {
    list-style: disc;
    padding: 0 21px;

    li::marker {
      color: var(--blue-600);
    }
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  fieldset {
    display: flex;
    gap: 21px;
    flex-wrap: wrap;
    border: none;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

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
`;

export { Container, FormStyled };
