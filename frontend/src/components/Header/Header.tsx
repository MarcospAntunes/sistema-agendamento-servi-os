import { MenuMobile, MenuMobileButton } from './components';
import HeaderStyled from './Header.style';

export default function Header() {
  return (
    <HeaderStyled>
      <div>
        <h1><strong>DentalCare</strong></h1>
        <span>Consultório Odontológico</span>
      </div>

      <MenuMobile />
      <nav>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Contato</a>

        <button>Agendar Consulta</button>
      </nav>
      <MenuMobileButton />
    </HeaderStyled>
  )
}