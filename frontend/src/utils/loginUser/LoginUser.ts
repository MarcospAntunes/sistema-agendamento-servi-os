import { LoginUserParams } from "@/services/api/api.types";
import { PostLoginUser } from "@/services/api/postRoutes";

export default async function LoginUser({ email, password }: LoginUserParams) {
  return await PostLoginUser({ email, password });
}
