import {
  GET_CLIENTS_LIST,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILURE,
  CLEAR_CLIENTS_DATA,
  SET_CURRENT_CLIENT,
  SEND_UPDATED_CLIENT_DATA,
} from '../constants/Clients';

const initState = {
  loading: true,
  list: [],
  currentClient: {},
};

const clients = (state = initState, action) => {
  switch (action.type) {
    case GET_CLIENTS_LIST:
      return { ...state, loading: true, error: null };
    case GET_CLIENTS_SUCCESS:
      return { ...state, loading: false, list: action.data };
    case GET_CLIENTS_FAILURE:
      return { ...state, loading: false, error: action.message };
    case SET_CURRENT_CLIENT:
      return { ...state, currentClient: action.data };
    case CLEAR_CLIENTS_DATA:
      return { ...state, list: [] };
    case SEND_UPDATED_CLIENT_DATA:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default clients;
