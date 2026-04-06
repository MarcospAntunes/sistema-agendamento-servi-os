import { AlertContext } from "@/contexts";
import { useContext } from "react";

export default function useAlert() {
  const { show, success, message, setShow, setSuccess, setMessage } = useContext(AlertContext);

  return {
    show,
    setShow,
    success,
    setSuccess,
    message,
    setMessage
  }
}