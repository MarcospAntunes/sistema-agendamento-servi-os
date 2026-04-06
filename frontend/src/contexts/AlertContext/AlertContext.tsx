"use client";

import { createContext, useEffect, useState } from "react";
import AlertContextTypes from "./AlertContext.type";
import Children from "@/types/Children";

const AlertContext = createContext<AlertContextTypes>({} as AlertContextTypes);
AlertContext.displayName = "Alert Context";

function AlertProvider({ children }: Children) {
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      setShow(false);
    }, 5000)

    return () => clearTimeout(timer);
  }, [show])

  return (
    <AlertContext.Provider
      value={{ show, setShow, success, setSuccess, message, setMessage }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export { AlertContext, AlertProvider };
