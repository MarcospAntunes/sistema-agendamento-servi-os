interface fetchHandlerParams {
  API_ROUTE: string; 
  method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE';
  param?: object;
  cache?: RequestCache
  credentials?: RequestCredentials 
}

export default fetchHandlerParams;