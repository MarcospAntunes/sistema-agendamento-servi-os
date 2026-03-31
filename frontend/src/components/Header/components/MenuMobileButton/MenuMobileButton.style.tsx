import styled from "styled-components";
import MenuMobileButtonTypes from "./MenuMobileButton.type";

const MenuMobileButtonStyled = styled.div<MenuMobileButtonTypes>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  z-index: 999;

  & div {
    width: 32px;
    border: 1px solid var(--blue-600);
  }

  & div:first-of-type, & div:last-of-type {
    transition: transform 0.3s ease;
  }

  & div:first-of-type {
    transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0)")};
  }

  & div:last-of-type {
    transform: ${({ $open }) =>
      $open
        ? "rotate(-45deg) translate(8px, -8px)"
        : "rotate(0) translate(0, 0)"};
  }

  & div:nth-of-type(2) {
    transition: opacity 0.3s ease;
    opacity: ${({ $open }) => ($open ? "0 !important" : "1")};
  }

  @media screen and (min-width: 541px) {
    display: none !important;
  }
`;

export default MenuMobileButtonStyled;
