import {
  GET_CLIENTS_LIST,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILURE,
  CLEAR_CLIENTS_DATA,
  SET_CURRENT_CLIENT,
  SEND_UPDATED_CLIENT_DATA,
} from 'redux/constants/Clients';
export const getClientsList = (data) => {
  return {
    type: GET_CLIENTS_LIST,
    data,
  };
};

export const getClientsListSuccess = (data) => {
  return {
    type: GET_CLIENTS_SUCCESS,
    data,
  };
};

export const getClientsListFailure = (message) => {
  return {
    type: GET_CLIENTS_FAILURE,
    message,
  };
};

export const clearClientsData = () => {
  return {
    type: CLEAR_CLIENTS_DATA,
  };
};

export const setCurrentClient = (data) => {
  return {
    type: SET_CURRENT_CLIENT,
    data,
  };
};

export const sendUpdatedClienData = (data) => {
  return {
    type: SEND_UPDATED_CLIENT_DATA,
    data,
  };
};
