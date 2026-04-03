"use client";

import { useState } from "react";
import { Container, FormStyled } from "./Form.style";

export default function Form() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  return (
    <Container>
      <FormStyled action="#">
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
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>

        <button type="submit">Registrar-se</button>
      </FormStyled>
      <p>Sua senha deve atender os requisitos abaixo: </p>
      <ul>
        <li>Deve conter pelo menos 1 caractere especial</li>
        <li>Deve conter pelo menos 1 letra maiúscula</li>
        <li>Deve conter pelo menos 1 número</li>
        <li>Deve ter entre 8 e 15 caracteres</li>
      </ul>
    </Container>
  );
}
