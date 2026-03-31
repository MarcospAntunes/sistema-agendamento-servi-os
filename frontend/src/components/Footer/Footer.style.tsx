import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 42px 14px;
  background-color: var(--bg-footer);
  color: white;

  h3 {
    font-size: 18px;
  }
  h4,
  h3 {
    font-weight: bold;
  }

  & > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;
    width: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
  }

  & > div:last-of-type {
    padding: 28px 0;
    border-top: 1px solid var(--border-color-darker);

    & > div {
      flex-direction: row;
    }

    & a, p {
      text-align: center;
      font-size: 12px;
    }
    & p {
      max-width: unset;
    }
  }

  li {
    line-height: 24px;
  }

  li + li {
    margin-bottom: 10px;
  }

  p,
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 224px;
  }
`;

export default FooterStyled;
