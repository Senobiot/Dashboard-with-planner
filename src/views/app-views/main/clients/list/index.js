import { useEffect } from 'react';
import ClientModel from './ClientModel';
import { useDispatch, useSelector } from 'react-redux';
import { clearClientsData, getClientsList } from 'redux/actions/Clients';
import Loading from 'components/shared-components/Loading';

const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.clients.loading);
  const clientsList = useSelector((state) => state.clients.list);

  useEffect(() => {
    if (!clientsList.length) {
      const timer = setTimeout(() => {
        dispatch(getClientsList());
      }, 2000);

      return () => {
        clearTimeout(timer);
        dispatch(clearClientsData());
      };
    }
  }, []);

  return loading ? (
    <Loading cover='content' />
  ) : (
    <ClientModel data={clientsList} />
  );
};

export default List;
