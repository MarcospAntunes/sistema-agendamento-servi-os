import styled from "styled-components";
import MenuMobileTypes from "./MenuMobile.type";

const MenuMobileStyled = styled.nav<MenuMobileTypes>`
  position: absolute;
  right: ${({ $open }) => ($open ? "0" : "-100vw")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 70%;
  height: 100vh;
  padding: 10px;
  background: #fff;
  z-index: 999;
  transition: 0.5s;

  & button {
    width: 100%;
  }

  @media screen and (min-width: 541px) {
    display: none;
  }
`;

export default MenuMobileStyled;
