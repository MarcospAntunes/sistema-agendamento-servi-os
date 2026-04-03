import fetchHandler from "@/utils/fetchHandler/fetchHandler";

async function deleteUser(id: number) {
  const API_ROUTE = `http://localhost:5291/users/${id}`;

  return await fetchHandler({API_ROUTE: API_ROUTE, method: 'DELETE', cache: 'no-store', credentials: 'include'});
}

async function deleteService(id: number) {
  const API_ROUTE = `http://localhost:5291/services/${id}`;

  return await fetchHandler({API_ROUTE: API_ROUTE, method: 'DELETE', cache: 'no-store', credentials: 'include'});
}

async function deleteRole(id: number) {
  const API_ROUTE = `http://localhost:5291/roles/${id}`;

  return await fetchHandler({API_ROUTE: API_ROUTE, method: 'DELETE', cache: 'no-store', credentials: 'include'});
}

async function deleteAgendamento(id: number) {
  const API_ROUTE = `http://localhost:5291/agendamentos/${id}`;

  return await fetchHandler({API_ROUTE: API_ROUTE, method: 'DELETE', cache: 'no-store', credentials: 'include'});
}

export { deleteUser, deleteService, deleteRole, deleteAgendamento }