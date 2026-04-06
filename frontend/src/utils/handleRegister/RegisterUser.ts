import { PostUser } from "@/services/api/postRoutes";
import { CreateUserParams } from "@/services/api/api.types";

export default async function RegisterUser({
  nome,
  telefone,
  email,
  password,
}: CreateUserParams) {

  return await PostUser({nome, telefone, email, password});;
}
