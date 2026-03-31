"use client"

import MenuMobileStyled from "./MenuMobile.style";
import { useChangeMenuMobile } from "@/hooks";

export default function MenuMobile() {
  const { open } = useChangeMenuMobile();

  return (
    <MenuMobileStyled $open={open}>
      <a href="#">Início</a>
      <a href="#">Sobre</a>
      <a href="#">Serviços</a>
      <a href="#">Contato</a>

      <button>Agendar Consulta</button>
    </MenuMobileStyled>
  );
}
