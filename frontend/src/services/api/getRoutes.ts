import fetchHandler from "@/utils/fetchHandler/fetchHandler";

async function getUserById(id: number) {
  const APÌ_ROUTE = `http://localhost:5291/users/${id}`;
  
  return await fetchHandler({ API_ROUTE: APÌ_ROUTE, method: 'GET', param: {id: id}, credentials: 'include' })
}

async function getServiceById(id: number) {
  const APÌ_ROUTE = `http://localhost:5291/services/${id}`;
  
  return await fetchHandler({ API_ROUTE: APÌ_ROUTE, method: 'GET', param: {id: id} })
}

async function getAgendamentosByUserId(id: number) {
  const API_ROUTE = `http://localhost:5291/agendamentos/user/${id}`;

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'GET', credentials: 'include' })
}

async function getAgendamentosByServiceId(id: number) {
  const API_ROUTE = `http://localhost:5291/agendamentos/service/${id}`;

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'GET', credentials: 'include' })
}

async function getAgendamentosByDate(data: string) {
  const formattedDate = new Date(data).toISOString();

  const API_ROUTE = `http://localhost:5291/agendamentos/user/${formattedDate}`;

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'GET', credentials: 'include' })
}

async function getAllServices() {
  const API_ROUTE = 'http://localhost:5291/services';

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'GET' })
}

async function getAllAgendamentos() {
  const API_ROUTE = 'http://localhost:5291/agendamentos';

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'GET', credentials: 'include' })
}

async function refreshUser() {
  const API_ROUTE = "http://localhost:5291/users/me";

  return await fetchHandler({ API_ROUTE: API_ROUTE, method: 'GET', credentials: 'include' })
}

export { 
  getUserById, 
  getServiceById, 
  getAgendamentosByUserId, 
  getAgendamentosByServiceId, 
  getAgendamentosByDate, 
  getAllServices, 
  getAllAgendamentos, 
  refreshUser 
}