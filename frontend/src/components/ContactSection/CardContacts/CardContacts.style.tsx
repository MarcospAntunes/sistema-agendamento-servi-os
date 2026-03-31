import styled from "styled-components";

const CardContactsStyled = styled.div`
  display: flex;
  gap: 16px;
  padding: 21px;
  border: 1px solid var(--bg-gray-darker);
  border-radius: 8px;
  color: var(--text-secondary-color);

  h4 {
    margin-bottom: 7px;
    color: black;
    font-weight: bold;
  }

  & > div:first-of-type {
    width: 42px;
    height: 42px;
    text-align: center;
    align-content: center;
    background-color: var(--blue-100);

    & svg {
      width: 21px;
      height: 21px;
    }
  }
`;

export default CardContactsStyled;