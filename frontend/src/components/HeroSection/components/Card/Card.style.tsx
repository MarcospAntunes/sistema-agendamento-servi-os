import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & p {
    font-size: 21px;
  }

  & p:nth-of-type(2) {
    font-size: 12px;
    color: var(--text-secondary-color);
  }
`

export default CardStyled;