import CardServices from "./components/CardServices/CardServices";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import ServicesSectionStyled from "./ServicesSection.style";
import { PiMagicWand } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineShield, MdOutlineHealthAndSafety } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { BsLightningCharge } from "react-icons/bs";

export default function ServicesSection() {
  return (
    <ServicesSectionStyled>
      <Title text="Nossos Serviços" />
      <Subtitle
        text="Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia moderna e profissionais especializados para cuidar da sua saúde bucal."
        textAlignment="center"
      />
      <div>
        <CardServices
          Icon={<PiMagicWand color="var(--blue-600)" />}
          describe="Limpeza profissional, aplicação de flúor e orientações de higiene bucal."
          title="Limpeza e Prevenção"
          list={[
            "Profilaxia",
            "Remoção de tártaro",
            "Apliocação de flúor",
            "Orientação de escovação",
          ]}
        />
        <CardServices
          Icon={<FaRegSmile color="var(--blue-600)" />}
          title="Clínica Geral"
          describe="Tratamentos básicos como restaurações, extrações e check-ups regulares."
          list={["Restaurações", "Extrações", "Check-ups", "Diagnósticos"]}
        />
        <CardServices
          Icon={<PiMagicWand color="var(--blue-600)" />}
          title="Estética Dental"
          describe="Clareamento, facetas e tratamentos para um sorriso mais bonito."
          list={[
            "Clareamento",
            "Facetas",
            "Restaurações estéticas",
            "Design do sorriso",
          ]}
        />
        <CardServices
          Icon={<MdOutlineShield color="var(--blue-600)" />}
          title="Endodontia"
          describe="Tratamento de canal com tecnologia moderna e menor desconforto."
          list={[
            "Tratamento de canal",
            "Retratamento",
            "Apicectomia",
            "Diagnóstico pulpar",
          ]}
        />
        <CardServices
          Icon={<GoPeople color="var(--blue-600)" />}
          title="Odontopediatria"
          describe="Cuidados especializados para a saúde bucal das crianças."
          list={[
            "Primeira consulta",
            "Prevenção",
            "Educação",
            "Tratamentos infantis",
          ]}
        />
        <CardServices
          Icon={<MdOutlineHealthAndSafety color="var(--blue-600)" />}
          title="Periodontia"
          describe="Tratamento de doenças da gengiva e estruturas de suporte dos dentes."
          list={[
            "Limpeza profunda",
            "Tratamento de gengivite",
            "Cirurgia periodontal",
            "Manutenção",
          ]}
        />
      </div>
      <div>
        <BsLightningCharge color="var(--blue-100)" />
        <h3>Tecnologia de Ponta</h3>
        <p>
          Utilizamos equipamentos modernos como radiografia digital, scanner
          intraoral e laser odontológico para diagnósticos precisos e
          tratamentos mais confortáveis.
        </p>
        <button>Conheça Nossa Estrutura</button>
      </div>
    </ServicesSectionStyled>
  );
}
