import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-color);
  box-shadow: 0 0 1px 0.5px 0.5px gray;

  & div {
    display: flex;
    gap: 5px;

    & h1 {
      font-size: 21px;
    }

    & span {
      font-size: 12px;
      color: var(--text-secondary-color);
    }
  }

  & nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & button {
      background-color: var(--bg-gray);
      border-radius: 5px;
      padding: 7px 14px;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

export default HeaderStyled;