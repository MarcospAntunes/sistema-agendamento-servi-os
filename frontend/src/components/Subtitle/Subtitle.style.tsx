import styled from "styled-components";
import { SubtitleStyledTypes } from "./Subtitle.type";

const SubtitleStyled = styled.p<SubtitleStyledTypes>`
  max-width: 650px;
  font-size: 16px;
  color: var(--text-secondary-color);
  text-align: ${props => props.$textAlignment || 'left'};
`

export default SubtitleStyled;