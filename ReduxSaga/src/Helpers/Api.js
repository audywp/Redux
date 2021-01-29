import axios from 'axios';

export const Request = (method, url, body, headers) => {
  const result = axios({
    method,
    url,
    body,
    headers,
  });

  return result;
};
