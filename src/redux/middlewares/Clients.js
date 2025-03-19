import { GET_CLIENTS_SUCCESS } from 'redux/constants/Clients';

const clientsDataFormatter = () => (next) => async (action) => {
  const { data } = action;
  if (action.type === GET_CLIENTS_SUCCESS) {
    const modifyedData = data.map((e, i) => ({
      key: e.id,
      avatar: e.avatar || `/img/avatars/thumb-${i + 1}.jpg`,
      name: e.name,
      email: e.email,
      city: e.address?.city,
      phone: e.phone,
      company: e.company?.name,
      website: e.website,
      username: e.username,
      status: generateRandomBinary() ? 'not active' : 'active',
    }));

    function generateRandomBinary() {
      return Math.floor(Math.random() * 2);
    }

    action.data = modifyedData;
  }

  next(action);
};

export default clientsDataFormatter;
