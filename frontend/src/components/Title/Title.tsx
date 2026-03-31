import TitleStyled from "./Title.style";
import TitleTypes from "./Title.type";

export default function Title({ text }: TitleTypes) {
  return <TitleStyled>{text}</TitleStyled>;
}
