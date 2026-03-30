import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 15px 0;

  & button:first-of-type {
    border: none;
    font-weight: 600;
    background-color: var(--blue-600);
    color: white;
  }

  & button {
    height: 35px;
    padding: 0 21px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 12px;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & div { border: none !important }
  }
`

export default Container;