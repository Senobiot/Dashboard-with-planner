import { call, put, takeEvery, all } from 'redux-saga/effects';
import { getClientsListSuccess, getClientsListFailure } from '../actions';
import { GET_CLIENTS_LIST } from 'redux/constants/Clients';

const fetchClientsListFromApi = async () => {
  const response = await fetch(
    process.env.API_URL || 'https://jsonplaceholder.typicode.com/users'
  );
  if (!response.ok) {
    throw new Error('Failed to get clients list');
  }
  return await response.json();
};

function* fetchDataSaga() {
  try {
    const data = yield call(fetchClientsListFromApi);
    yield put(getClientsListSuccess(data));
  } catch (error) {
    yield put(getClientsListFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeEvery(GET_CLIENTS_LIST, fetchDataSaga);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
