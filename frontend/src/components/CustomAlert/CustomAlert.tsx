"use client";

import { useAlert } from "@/hooks";
import CustomAlertStyled from "./CustomAlert.style";

export default function CustomAlert() {
  const { success, show, message } = useAlert();
  return show ? (
    <CustomAlertStyled $success={success}>
      <p>{message}</p>
      <div></div>
    </CustomAlertStyled>
  ) : (
    <></>
  );
}
