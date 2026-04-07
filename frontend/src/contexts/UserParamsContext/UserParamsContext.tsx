"use client";

import Children from "@/types/Children";
import { createContext, useState } from "react";
import UserParamsContextTypes from "./USerParamsContext.types";

const UserParamsContext = createContext<UserParamsContextTypes>(
  {} as UserParamsContextTypes,
);
UserParamsContext.displayName = "UserParams";

function UserParamsProvider({ children }: Children) {
  const [nome, setNome] = useState("");
  const [errorName, setErrorName] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [errorTelefone, setErrorTelefone] = useState(true);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(true);
  const [errorPasswordId, setErrorPasswordId] = useState([""]);
  const [response, setResponse] = useState({});
  
  return (
    <UserParamsContext.Provider
      value={{
        nome,
        setNome,
        telefone,
        setTelefone,
        email,
        setEmail,
        password,
        setPassword,
        errorEmail,
        setErrorEmail,
        errorName,
        setErrorName,
        errorPassword,
        setErrorPassword,
        errorTelefone,
        setErrorTelefone,
        errorPasswordId,
        setErrorPasswordId,
        response, 
        setResponse
      }}
    >
      {children}
    </UserParamsContext.Provider>
  );
}

export { UserParamsContext, UserParamsProvider };
