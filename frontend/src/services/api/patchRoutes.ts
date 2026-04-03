import fetchHandler from "@/utils/fetchHandler/fetchHandler";
import { PatchServiceParams, PatchUserParams } from "./api.types";

async function patchService(service: PatchServiceParams) {
  const API_ROUTE = `http://localhost:5291/services/${service.id}`;

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'PATCH', param: service, cache: 'no-store', credentials: 'include' });
}

async function patchUser(user: PatchUserParams) {
  const API_ROUTE = `http://localhost:5291/users/${user.id}`;

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'PATCH', param: user, cache: 'no-store', credentials: 'include' });
}

async function patchRole(id: number, roleName: string) {
  const API_ROUTE = `http://localhost:5291/users/${id}`

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'PATCH', param: {role: roleName}, cache: 'no-store', credentials: 'include' });
}

async function patchAgendamento(id: number, agendamentoDate: string) {
  const API_ROUTE = `http://localhost:5291/agendamentos/${id}`
  const formattedDate = new Date(agendamentoDate).toISOString();

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'PATCH', param: {new_date: formattedDate}, cache: 'no-store', credentials: 'include' });
}

export { patchService, patchUser, patchRole, patchAgendamento }