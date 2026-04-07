"use client";

import { useUserParams } from "@/hooks";
import LoginFormStyled from "./LoginForm.style";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { email, setEmail, password, setPassword, handleLoginUser, response } = useUserParams();
  const router = useRouter();

  useEffect(() => {
    if(response?.success) {
      router.push("/area-usuario");
    }
  }, [response])

  return (
    <LoginFormStyled onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">
        Email *
        <input
          type="email"
          required
          placeholder="Digite seu e-mail cadastrado"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Senha *
        <input
          type="password"
          required
          placeholder="Digite sua senha de login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <a href="#">Esqueceu sua senha?</a>
      <button type="submit" onClick={handleLoginUser}>Log In</button>
      <span>
        Não tem uma conta? <a href="#">Registre-se agora.</a>
      </span>
    </LoginFormStyled>
  );
}
