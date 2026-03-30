import styled from "styled-components";

const FloatingContentStyled = styled.div`
  position: absolute;
  bottom: -20px;
  left: -20px;
  display: flex;
  gap: 10px;
  max-width: 240px;
  padding: 21px;
  border-radius: 10px;
  box-shadow: var(--box-shadow-3D-effect);
  background-color: var(--primary-color);

  & span:first-of-type {
    width: 42px;
    height: 42px;
    border-radius: 100%;
    text-align: center;
    align-content: center;
    background-color: var(--blue-100);
  }

  & span:last-of-type P:last-of-type {
    font-size: 12px;
    color: var(--text-secondary-color);
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;

export default FloatingContentStyled;
