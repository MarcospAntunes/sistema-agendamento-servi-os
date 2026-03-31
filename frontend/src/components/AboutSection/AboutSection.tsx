import Subtitle from "../Subtitle/Subtitle";
import Image from "next/image";
import AboutSectionStyled from "./AboutSection.style";
import Title from "../Title/Title";
import Card from "../Card/Card";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShield } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { GoPeople } from "react-icons/go";

export default function AboutSection() {
  return (
    <AboutSectionStyled>
      <Title text="Sobre a DentalCare" />
      <Subtitle
        text="Há mais de 15 anos dedicados à saúde bucal, 
        oferecemos tratamentos odontológicos de qualidade 
        com uma abordagem moderna e humanizada"
        textAlignment="center"
      />

      <div>
        <div>
          <h2>Nossa Filosofia</h2>
          <p>
            Acreditamos que cada sorriso é único e merece cuidado especializado.
            Nossa missão é proporcionar tratamentos odontológicos de excelência,
            combinando tecnologia avançada com atendimento humanizado e
            personalizado.
          </p>
          <p>
            Trabalhamos com uma equipe multidisciplinar de especialistas, sempre
            em constante atualização, para oferecer o que há de mais moderno em
            odontologia.
          </p>

          <ul>
            <li>
              <strong>Missão:</strong> Transformar sorrisos e melhorar a
              qualidade de vida dos nossos pacientes.
            </li>
            <li>
              <strong>Visão:</strong> Ser referência em odontologia de qualidade
              e atendimento humanizado.
            </li>
            <li>
              <strong>Valores:</strong> Ética, excelência, inovação e cuidado
              com pessoas.
            </li>
          </ul>
        </div>
        <Image
          src="/images/dentista.jpg"
          alt="Dentista"
          width={469}
          height={500}
        />
      </div>
      <div>
        <Card 
          Icon={<FaRegHeart color="var(--blue-600)" />}
          strongText="Cuidado Humanizado"
          normalText="Tratamos cada paciente com carinho, respeito e atenção individualizada."
          border="solid"
        />
        <Card 
          Icon={<MdOutlineShield color="var(--blue-600)" />}
          strongText="Segurança Total"
          normalText="Protocolos rigorosos de higiene e biossegurança para sua proteção."
          border="solid"
        />
        <Card 
          Icon={<BsLightningCharge color="var(--blue-600)" />}
          strongText="Tecnologia Moderna"
          normalText="Equipamentos de última geração para tratamentos mais eficazes."
          border="solid"
        />
        <Card 
          Icon={<GoPeople color="var(--blue-600)" />}
          strongText="Equipe Especializada"
          normalText="Profissionais qualificados em constante atualização."
          border="solid"
        />
      </div>
    </AboutSectionStyled>
  );
}
