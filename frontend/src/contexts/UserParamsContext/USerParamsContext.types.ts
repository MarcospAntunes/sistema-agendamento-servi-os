import { Dispatch, SetStateAction } from "react";

type UserParamsContextTypes = {
  nome: string;
  setNome: Dispatch<SetStateAction<string>>;
  
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;

  telefone: string;
  setTelefone: Dispatch<SetStateAction<string>>;

  password: string;
  setPassword: Dispatch<SetStateAction<string>>;

  errorName: boolean;
  setErrorName: Dispatch<SetStateAction<boolean>>;

  errorEmail: boolean;
  setErrorEmail: Dispatch<SetStateAction<boolean>>;

  errorTelefone: boolean;
  setErrorTelefone: Dispatch<SetStateAction<boolean>>;

  errorPassword: boolean;
  setErrorPassword: Dispatch<SetStateAction<boolean>>;

  errorPasswordId: string[];
  setErrorPasswordId: Dispatch<SetStateAction<string[]>>;
}

export default UserParamsContextTypes;