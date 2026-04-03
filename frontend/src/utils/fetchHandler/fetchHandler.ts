import fetchHandlerParams from "./fetchHandler.types";

async function fetchHandler({API_ROUTE, method, param, cache, credentials}: fetchHandlerParams) {

  const res = await fetch(API_ROUTE, {
    method: method,
    headers: {
      'Content-type': 'application/json',
    },
    cache: cache,
    body: JSON.stringify(param),
    credentials: credentials
  });

  return res.json();
}

export default fetchHandler;