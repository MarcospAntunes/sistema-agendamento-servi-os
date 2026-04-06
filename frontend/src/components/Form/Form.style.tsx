import styled from "styled-components";
import { ContainerTypes, FormStyledTypes } from "./Form.type";

const Container = styled.div<ContainerTypes>`
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
    list-style: none;
    padding: 0 21px;
    color: var(--success-color);

    li::marker {
      color: var(--blue-600);
    }

    li::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      background-image: url("/icons/success-mark-icon.svg");
      background-repeat: no-repeat;
      background-size: contain;
      vertical-align: middle;
    }

    ${({ $errorPasswordId }) =>
      $errorPasswordId.map(
        (id) => `
          #${id} {
            color: var(--error-color);
            text-decoration: underline;
          }
          #${id}::before {
            background-image: url("/icons/error-mark-icon.svg");
          }
      `,
      )}
  }
`;

const FormStyled = styled.form<FormStyledTypes>`
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

  input[type="password"] {
    border: ${({ $errorPassword }) =>
      $errorPassword ? "1px solid var(--error-color)" : "none"};
  }

  input[type="email"] {
    border: ${({ $errorEmail }) =>
      $errorEmail ? "1px solid var(--error-color)" : "none"};
  }

  input[type="tel"] {
    border: ${({ $errorTelefone }) =>
      $errorTelefone ? "1px solid var(--error-color)" : "none"};
  }

  input[type="text"] {
    border: ${({ $errorName }) =>
      $errorName ? "1px solid var(--error-color)" : "none"};
  }
`;

export { Container, FormStyled };
