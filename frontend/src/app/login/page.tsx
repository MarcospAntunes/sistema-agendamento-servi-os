import Subtitle from "@/components/Subtitle/Subtitle";
import Title from "@/components/Title/Title";
import LoginStyled from "./style";
import { LoginForm } from "@/components";

export default function Login() {
  return (
    <LoginStyled>
      <Title text="Bem-vindo de Volta" />
      <Subtitle text="Entre com seu e-mail e senha para acessar sua conta" textAlignment="center" />
      <LoginForm />
    </LoginStyled>
  );
}
