import { Container, Card, FloatingContent } from "./components";
import HeroSectionStyled from "./HeroSection.styled";
import Image from "next/image";
import { GoPeople } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";
import { FiClock } from "react-icons/fi";

export default function HeroSection() {
  return (
    <HeroSectionStyled>
      <div>
        <h1>
          Seu sorriso é nossa <span>prioridade</span>
        </h1>
        <p>
          Oferecemos tratamentos odontológicos de excelência com tecnologia
          moderna e atendimento humanizado. Cuidamos da saúde do seu sorriso com
          carinho e profissionalismo.
        </p>
        <Container>
          <button>Agendar Consulta</button>
          <button>Ver Serviços</button>
        </Container>

        <Container>
          <div>
            <Card
              Icon={<GoPeople color="var(--blue-600)" />}
              strongText="500+"
              normalText="Pacientes"
            />
            <Card
              Icon={<FaRegStar color="#F1BA20" />}
              strongText="4.9"
              normalText="Avaliações"
            />
            <Card
              Icon={<PiMedalLight color="#1FB056" />}
              strongText="15+"
              normalText="Anos"
            />
            <Card
              Icon={<FiClock color="#9810FA" />}
              strongText="24h"
              normalText="Suporte"
            />
          </div>
        </Container>
      </div>
      <div>
        <Image
          src="/images/consultorio.jpg"
          alt="Consultório"
          width={469}
          height={500}
        />
        <FloatingContent />
      </div>
    </HeroSectionStyled>
  );
}
