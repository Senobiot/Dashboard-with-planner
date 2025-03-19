import { Table, Avatar, Tag, Space, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { ROUTES_NAV } from 'constants/Routes';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { setCurrentClient } from 'redux/actions';
import { useDispatch } from 'react-redux';

const ClientModel = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const navigateToProfile = (client) => {
    dispatch(setCurrentClient(client));
    history.push(
      `${ROUTES_NAV.main}${ROUTES_NAV.main.clients.list}?name=${client.name}`
    );
  };
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => <Avatar src={avatar} />,
    },
    {
      title: 'User',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',
    },
    {
      city: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size='middle'>
          <Button icon={<EyeOutlined />} type='link' />
          <Button icon={<DeleteOutlined />} type='link' danger />
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      onRow={(client) => ({
        onClick: () => navigateToProfile(client),
      })}
    />
  );
};

export default ClientModel;
