import fetchHandler from "@/utils/fetchHandler/fetchHandler";
import { 
  CreateAgendamentoParams, 
  CreateServiceParams, 
  CreateUserParams, 
  LoginUserParams 
} from "./api.types";

async function PostUser(user: CreateUserParams) {
  const API_ROUTE = "http://localhost:5291/users/register";

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'POST', param: user, cache: 'no-store' })
}

async function PostService(service: CreateServiceParams) {
  const API_ROUTE = "http://localhost:5291/services";

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'POST', param: service, cache: 'no-store', credentials: 'include' })
}

async function PostAgendamento(agendamento: CreateAgendamentoParams) {
  const API_ROUTE = "http://localhost:5291/agendamentos";
  const data = new Date(agendamento.data_hora);

  agendamento.data_hora = data.toISOString();

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'POST', param: agendamento, cache: 'no-store', credentials: 'include' })
}

async function PostLoginUser(loginUser: LoginUserParams) {
  const API_ROUTE = "http://localhost:5291/users/login";

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'POST', param: loginUser, cache: 'no-store', credentials: 'include' })
}

async function PostRole(role: string) {
  const API_ROUTE = "http://localhost:5291/users/login";

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'POST', param: {role: role}, cache: 'no-store', credentials: 'include' })
}

export { 
  PostUser, 
  PostService, 
  PostAgendamento, 
  PostLoginUser, 
  PostRole 
}