import styled from "styled-components";
import { CustomAlertStyledTypes } from "./CustomAlert.type";

const CustomAlertStyled = styled.div<CustomAlertStyledTypes>`
  @keyframes durationIndicator {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }

  position: fixed;
  top: 80px;
  left: calc(50vw - 200px);
  width: 400px;
  height: 80px;
  padding: 5px;
  text-align: center;
  align-content: center;
  border-radius: 8px;
  background-color: ${({ $success }) =>
    $success ? "var(--success-color)" : "var(--error-color)"};
  color: white;
  z-index: 99999;

  p::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    background-image: ${({ $success }) =>
      $success
        ? "url('/icons/success-mark-icon.svg')"
        : "url('/icons/error-mark-icon.svg')"};
    filter: brightness(0) invert(1);
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
  }

  div {
    width: 100%;
    height: 2px;
    margin: 10px 0;
    background-color: white;
    animation: durationIndicator 5.1s normal;
  }
`;

export default CustomAlertStyled;
