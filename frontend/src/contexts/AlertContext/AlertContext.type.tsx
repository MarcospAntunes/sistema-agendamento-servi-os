import { Dispatch, SetStateAction } from "react";

type AlertContextTypes = {
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

export default AlertContextTypes;