import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import ContactSectionStyled from "./ContactSection.Style";
import CardContacts from "./CardContacts/CardContacts";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaRegClock, FaInstagram } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import Form from "../Form/Form";

export default function ContactSection() {

  return (
    <ContactSectionStyled>
      <Title text="Entre em Contato" />
      <Subtitle
        text="Estamos prontos para atender você. Agende sua consulta ou tire suas dúvidas através dos nossos canais de atendimento."
        textAlignment="center"
      />
      <div>
        <Form />
        <div>
          <CardContacts
            title="Endereço"
            Icon={<IoLocationOutline color="var(--blue-600)" />}
            text={[
              "Rua das Flores, 123",
              "Jardim Paulista - São Paulo/SP",
              "CEP: 01234-567",
            ]}
          />
          <CardContacts
            title="Telefone"
            Icon={<BsTelephone color="var(--blue-600)" />}
            text={["(11) 99999-9999", "(11) 3333-3333"]}
          />
          <CardContacts
            title="E-mail"
            Icon={<MdOutlineMail color="var(--blue-600)" />}
            text={["contato@detalcare.com.br", "agendamento@dentalcare.com.br"]}
          />
          <CardContacts
            title="Horário de Funcionamento"
            Icon={<FaRegClock color="var(--blue-600)" />}
            text={[
              "Segunda a Sexta: 8h às 18h",
              "Sábado: 8h às 12h",
              "Domingo: Fechado",
            ]}
          />
          <div>
            <h4>Siga-nos nas Redes Sociais</h4>
            <div>
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram /> Instagram
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <SlSocialFacebook /> Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContactSectionStyled>
  );
}
