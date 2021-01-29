import axios from 'axios';
import {URL} from '../Shared/Utils/Config';
import {Store} from '../Store/Store';

function* doRequest(endpoint, options) {
  try {
    const Blacklist = ['/api/login', 'api/register'];

    let response;
    const {method, body, headers} = options;
    const Token = Store.getState().LoginReducer.token;
    const result = yield axios({
      url: `${URL}${endpoint}`,
      method,
      data: body,
      headers: headers
        ? Token && !Blacklist.includes(endpoint)
          ? {Authorization: `Bearer ${Token}`}
          : {...headers}
        : Token && !Blacklist.includes(endpoint)
        ? {Authorization: `Bearer ${Token}`}
        : null,
    });

    if (result.status === 200) {
      response = {
        ...result,
        status: true,
      };
    }

    return response;
  } catch (error) {
    return {
      messages: "There's error from our server, try again later",
      status: false,
    };
  }
}
export function* request(endpoint, method, config) {
  return yield doRequest(endpoint, {method, ...config});
}
