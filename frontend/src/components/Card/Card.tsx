import { CardTypes} from "./Card.type";
import CardStyled from "./Card.style";

export default function Card({ Icon, normalText, strongText, border }: CardTypes) {
  return(
    <CardStyled $border={border}>
      <div>{Icon}</div>
      <p><strong>{strongText}</strong></p>
      <p>{normalText}</p>
    </CardStyled>
  )
}