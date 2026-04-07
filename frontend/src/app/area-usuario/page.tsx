"use client";

import { useUserParams } from "@/hooks"

export default function AreaUsuario() {
  const { email, nome, telefone } = useUserParams();
  return (
    <>
      {email}
      {nome}
      {telefone}
    </>
  )
}