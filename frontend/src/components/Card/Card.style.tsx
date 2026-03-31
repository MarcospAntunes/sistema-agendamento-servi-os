import styled from "styled-components";
import { CardStyledTypes } from "./Card.type";

const CardStyled = styled.div<CardStyledTypes>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 100px;
  max-width: 330px;
  padding: ${({ $border }) => ($border ? "21px" : "0px")};
  border: 1px ${({ $border }) => ($border ? $border : "none")} var(--bg-gray);
  border-radius: 8px;

  ${({ $border }) =>
    $border &&
    `
      & div {
        width: 56px;
        height: 56px;
        background-color: var(--blue-100); 
        border-radius: 100%;
        align-content:  center;
        text-align: center;

        & svg {
          width: 28px;
          height: 28px;
        }
      }
    `}

  & p {
    font-size: ${({ $border }) => ($border ? "14px" : "21px")};
    color: black !important;
    text-align: center
  }

  & p:nth-of-type(2) {
    font-size: 12px;
    color: var(--text-secondary-color) !important;
  }
`;

export default CardStyled;
