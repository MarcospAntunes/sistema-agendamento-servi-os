"use client";

import { useUserParams } from "@/hooks";
import { Container, FormStyled } from "./Form.style";

export default function Form() {
  const {
    nome,
    email,
    password,
    telefone,
    setEmail,
    setNome,
    setPassword,
    setTelefone,
    handleRegisterUser,
    errorEmail,
    errorName,
    errorPassword,
    errorTelefone,
    errorPasswordId,
  } = useUserParams();

  return (
    <Container $errorPasswordId={errorPasswordId}>
      <FormStyled
        action="#"
        onSubmit={(e) => e.preventDefault()}
        $errorEmail={errorEmail}
        $errorName={errorName}
        $errorPassword={errorPassword}
        $errorTelefone={errorTelefone}
      >
        <legend>Agende sua consulta</legend>
        <fieldset>
          <label htmlFor="nome">
            Nome Completo *
            <input
              type="text"
              placeholder="Seu nome completo"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>

          <label htmlFor="telefone">
            Telefone *
            <input
              type="tel"
              placeholder="11999999999"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </label>
        </fieldset>

        <label htmlFor="email">
          E-mail *
          <input
            type="email"
            placeholder="seu@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="senha">
          Senha *
          <input
            type="password"
            placeholder="Digite sua senha"
            minLength={8}
            maxLength={15}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" onClick={handleRegisterUser}>
          Registrar-se
        </button>
      </FormStyled>
      <p>Sua senha deve atender os requisitos abaixo: </p>
      <ul>
        <li id="special-caracter">
          Deve conter pelo menos 1 caractere especial
        </li>
        <li id="upper-letter">Deve conter pelo menos 1 letra maiúscula</li>
        <li id="down-letter">Deve conter pelo menos 1 letra minúscula</li>
        <li id="number">Deve conter pelo menos 1 número</li>
        <li id="caracters">Deve ter entre 8 e 15 caracteres</li>
      </ul>
    </Container>
  );
}
