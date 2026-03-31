import CardServicesStyled from "./CardServices.style";
import CardServicesTypes from "./CardServices.type";
import { FaArrowRight } from "react-icons/fa6";

export default function CardServices({Icon, title, describe, list}: CardServicesTypes) {
  return(
    <CardServicesStyled>
      <div>{Icon}</div>
      <h4>{title}</h4>
      <p>{describe}</p>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button>Saber mais <FaArrowRight /></button>
    </CardServicesStyled>
  )
}