"use client"

import { FaRegUserCircle } from "react-icons/fa";
import MenuMobileStyled from "./MenuMobile.style";
import { useChangeMenuMobile } from "@/hooks";
import { useRouter } from "next/navigation";

export default function MenuMobile() {
  const { open } = useChangeMenuMobile();
  const router = useRouter();

  return (
    <MenuMobileStyled $open={open}>
      <FaRegUserCircle color="var(--blue-600)" onClick={() => router.push('/area-usuario')} />
      <a href="#">Início</a>
      <a href="#">Sobre</a>
      <a href="#">Serviços</a>
      <a href="#">Contato</a>
      <button>Agendar Consulta</button>
    </MenuMobileStyled>
  );
}
