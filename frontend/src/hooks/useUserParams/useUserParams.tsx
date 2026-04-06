import { UserParamsContext } from "@/contexts/UserParamsContext/UserParamsContext";
import { useContext, useEffect } from "react";
import { RegisterUser } from "@/utils";
import useAlert from "../useAlert/userAlert";

export default function useUserParams() {
  const {
    nome,
    email,
    password,
    telefone,
    setEmail,
    setNome,
    setPassword,
    setTelefone,
    errorEmail,
    errorName,
    errorPassword,
    errorTelefone,
    setErrorEmail,
    setErrorName,
    setErrorPassword,
    setErrorTelefone,
    errorPasswordId,
    setErrorPasswordId,
  } = useContext(UserParamsContext);

  const {setSuccess, setShow, setMessage} = useAlert();

  const handleRegisterUser = async () => {
    if (!errorEmail && !errorName && !errorPassword && !errorTelefone) {
      const res = await RegisterUser({ nome, telefone, email, password });
      setSuccess(res.success);
      setMessage(res.message);
      
    } else console.log("Error");
    setShow(true);
  };

  const checkPassword = () => {
    const regexToCheckDownLetter = /(?=.*[a-z])/;
    const regexToCheckUpperLetter = /(?=.*[A-Z])/;
    const regexToCheckNumber = /(?=.*\d)/;
    const regexToCheckSpecialCaracter = /(?=.*[^\da-zA-Z])/;
    const regexLength = /^.{9,15}$/;

    const errors = [];

    if (!regexToCheckDownLetter.test(password)) errors.push("down-letter");
    if (!regexToCheckUpperLetter.test(password)) errors.push("upper-letter");
    if (!regexToCheckNumber.test(password)) errors.push("number");
    if (!regexToCheckSpecialCaracter.test(password))
      errors.push("special-caracter");
    if (!regexLength.test(password)) errors.push("caracters");

    setErrorPasswordId(errors);
    if (errors.length == 0) setErrorPassword(false);
    else setErrorPassword(true);
  };

  const checkEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) setErrorEmail(false);
    else setErrorEmail(true);
  };

  const checkTelefone = () => {
    let isValid = false;

    if (telefone.startsWith("+55")) {
      isValid = /^\+55[0-9]{10,11}$/.test(telefone);
    } else {
      isValid = /^\+[0-9]{7,15}$/.test(telefone);
    }
    setErrorTelefone(!isValid);
  };

  const checkName = () => {
    const nomeLimpo = nome?.trim() || "";

    const isInvalid =
      nomeLimpo.length < 3 || !/^[\p{L}\s'-]+$/u.test(nomeLimpo);

    setErrorName(isInvalid);
  };

  useEffect(() => {
    checkPassword();
    checkEmail();
    checkTelefone();
    checkName();
  }, [password, email, telefone, nome]);

  return {
    nome,
    email,
    password,
    telefone,
    setEmail,
    setNome,
    setPassword,
    setTelefone,
    errorEmail,
    errorName,
    errorPassword,
    errorTelefone,
    setErrorEmail,
    setErrorName,
    setErrorPassword,
    setErrorTelefone,
    handleRegisterUser,
    errorPasswordId,
  };
}
