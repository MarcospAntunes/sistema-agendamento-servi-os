import FooterStyled from "./Footer.style";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaRegClock, FaRegHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterStyled>
      <div>
        <div>
          <h3>DentalCare</h3>
          <p>
            Há mais de 15 anos cuidando do seu sorriso com tecnologia moderna e
            atendimento humanizado.
          </p>
          <p>
            <FaRegHeart /> Feito com carinho para você
          </p>
        </div>

        <div>
          <h4>Links Rápidos</h4>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Serviços</h4>
          <ul>
            <li>Limpeza e Prevenção</li>
            <li>Cliníca Geral</li>
            <li>Estética Dental</li>
            <li>Endodontia</li>
            <li>Odontopediatria</li>
            <li>Periodontia</li>
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <ul>
            <li>
              <IoLocationOutline />
              <span>
                Rua das Flores, 123 <br /> Jardim Paulista - São Paulo/SP
              </span>
            </li>
            <li>
              <BsTelephone />
              <span>(11) 99999-9999</span>
            </li>
            <li>
              <MdOutlineMail />
              <span>contato@dentalcare.com.br</span>
            </li>
            <li>
              <FaRegClock />
              <span>
                Seg-Sex: 8h-18h <br /> Sáb: 8h-12h
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>
          © 2024 DentalCare Consultório Odontológico. Todos os direitos
          reservados.
        </p>
        <div>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </FooterStyled>
  );
}
