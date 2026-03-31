import SubtitleStyled from "./Subtitle.style";
import { SubtitleTypes } from "./Subtitle.type";

export default function Subtitle({ text, textAlignment }: SubtitleTypes) {
  return <SubtitleStyled $textAlignment={textAlignment}>{text}</SubtitleStyled>;
}
