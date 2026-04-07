"use client";

import { useRouter } from "next/navigation";
import { MenuMobile, MenuMobileButton } from "./components";
import HeaderStyled from "./Header.style";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  return (
    <HeaderStyled>
      <div>
        <h1>
          <strong>DentalCare</strong>
        </h1>
        <span>Consultório Odontológico</span>
      </div>

      <MenuMobile />
      <nav>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Contato</a>

        <button>Agendar Consulta</button>
        <FaRegUserCircle color="var(--blue-600)" onClick={() => router.push('/area-usuario')}/>
      </nav>
      <MenuMobileButton />
    </HeaderStyled>
  );
}
