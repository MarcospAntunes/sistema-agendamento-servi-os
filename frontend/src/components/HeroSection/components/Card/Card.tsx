import CardStyled from "./Card.style";
import CardTypes from "./Card.type";

export default function Card({strongText, normalText, Icon }: CardTypes) {
  return(
    <CardStyled>
      {Icon}
      <p><strong>{strongText}</strong></p>
      <p>{normalText}</p>
    </CardStyled>
  )
}