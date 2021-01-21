import Store from './Store';

export const ActionRedux = (type, payload) => {
  Store.dispatch({
    type, //type : type
    payload,
  });
};
