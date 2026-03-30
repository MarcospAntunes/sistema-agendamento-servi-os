import { FaRegStar } from "react-icons/fa";
import FloatingContentStyled from "./FloatingContent.style";

export default function FloatingContent() {
  return (
    <FloatingContentStyled>
      <span><FaRegStar color="var(--blue-600)" /></span>
      <span>
        <p><strong>Tecologia Avançada</strong></p>
        <p>Equipamentos modernos</p>
      </span>
    </FloatingContentStyled>
  );
}
