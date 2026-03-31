import styled from "styled-components";

const CardServicesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 21px;
  border: 1px solid var(--bg-gray-darker);
  border-radius: 8px;
  max-width: 330px;
  background-color: white;
  
  &:hover {
    transition: box-shadow 0.3s ease;
    box-shadow: var(--box-shadow-3D-effect);

    & button {
      background-color: var(--blue-100);
    }

    & div {
      background-color: #bdd8fc;
    }
  }

  div {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    align-content: center;
    text-align: center;
    background-color: var(--blue-100);
  }

  svg {
    width: 21px;
    height: 21px;
  }

  h4 {
    font-size: 18px;
  }

  p {
    color: var(--text-secondary-color);
  }

  ul {
    margin: 0 12px;
    list-style: disc;
    font-size: 12px;
  }

  li::marker {
    color: var(--blue-600);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border: 1px solid var(--bg-gray-darker);
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--bg-gray-darker);
    }
  }
`;

export default CardServicesStyled;