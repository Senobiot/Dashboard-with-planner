import { Row, Col, Upload, Button } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import FurnitureScheme from './FurtnitureScheme';

const SaveControls = ({ list, setList }) => {
  const loadProps = {
    name: 'file',
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setList(jsonData);
        } catch (err) {
          console.error('Error parsing JSON file:', err);
        }
      };
      reader.readAsText(file);
      return false;
    },
  };

  const save = () => {
    const layoutData = list.map((item) => new FurnitureScheme(item));
    const jsonString = JSON.stringify(layoutData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.json';
    link.click();
  };

  return (
    <Row style={{ marginTop: '10px' }}>
      <Col>
        <Button
          disabled={!list.length}
          type='primary'
          icon={<DownloadOutlined />}
          onClick={save}
        >
          Save scheme
        </Button>
      </Col>
      <Col>
        <Upload {...loadProps} showUploadList={false}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Col>
    </Row>
  );
};

export default SaveControls;
