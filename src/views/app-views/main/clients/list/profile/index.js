import {
  Card,
  Avatar,
  Form,
  Input,
  Button,
  Row,
  Col,
  DatePicker,
  Upload,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { sendUpdatedClienData } from 'redux/actions';
import Loading from 'components/shared-components/Loading';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const profileMap = [
  {
    label: 'Name',
    name: 'name',
    rules: { required: true, message: 'Please enter your name!' },
    component: <Input />,
  },
  {
    label: 'Username',
    name: 'username',
    rules: { required: true, message: 'Please enter your username!' },
    component: <Input />,
  },
  {
    label: 'Email',
    name: 'email',
    rules: { type: 'email', message: 'Please enter a valid email!' },
    component: <Input />,
  },
  {
    label: 'Date of Birth',
    name: 'dob',
    component: <DatePicker style={{ width: '100%' }} />,
  },
  {
    label: 'Phone Number',
    name: 'phone',
    component: <Input />,
  },
  {
    label: 'Website',
    name: 'website',
    component: <Input />,
  },
  {
    label: 'City',
    name: 'city',
    component: <Input />,
  },
  {
    label: 'Post Code',
    name: 'postcode',
    component: <Input />,
  },
];

const UserProfileForm = () => {
  const timerRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.clients.currentClient);
  const { city, email, name, phone, username, postcode, website, avatarUrl } =
    user || {};
  const [avatar, setAvatar] = useState(avatarUrl);
  const [form] = Form.useForm();
  const loading = useSelector((state) => state.clients.loading);

  const loadProps = {
    name: 'file',
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          setAvatar(e.target.result);
        } catch (err) {
          console.error('Error processing image:', err);
        }
      };
      reader.readAsDataURL(file);
      return false;
    },
  };

  const handleDelete = () => setAvatar('');

  const onFinish = (values) => {
    dispatch(sendUpdatedClienData(values));

    timerRef.current = setTimeout(() => {
      history.goBack();
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return loading ? (
    <Loading cover='content' />
  ) : (
    <Card
      style={{ width: 600, margin: 'auto', marginTop: '50px' }}
      cover={
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '20px',
          }}
        >
          <Avatar size={100} icon={<UserOutlined />} src={avatar} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginLeft: '30px',
            }}
          >
            <Upload {...loadProps} showUploadList={false}>
              <Button type='primary' icon={<UploadOutlined />}>
                Change avatar
              </Button>
            </Upload>
            <Button type='danger' onClick={handleDelete}>
              Remove
            </Button>
          </div>
        </div>
      }
    >
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{
          name,
          username,
          email,
          phone,
          website,
          city,
          postcode,
        }}
      >
        <Row gutter={16}>
          {profileMap.map((map) => (
            <Col span={12} key={map.name}>
              <Form.Item
                label={map.label}
                name={map.name}
                rules={map.rules && [map.rules]}
              >
                {map.component}
              </Form.Item>
            </Col>
          ))}
        </Row>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <Button type='primary' htmlType='submit'>
            Save Changes
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default UserProfileForm;
