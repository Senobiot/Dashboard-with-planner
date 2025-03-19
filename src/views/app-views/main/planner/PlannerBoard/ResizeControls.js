import { Button, Row, Col } from 'antd';
import { RotateLeftOutlined, RotateRightOutlined } from '@ant-design/icons';
import DimensionsInput from 'components/shared-components/DimensionsInput/DimensionsInput';

const ResizeControls = ({ selectedItem = {}, updateItem }) => {
  const { imgSrc, width, height, name, angle = 0 } = selectedItem;

  const setRotation = (_, reverse) => {
    const newAngle = (Number(angle) + (reverse ? 15 : -15)) % 360;
    updateItem({ ...selectedItem, angle: newAngle });
  };

  const setWidth = (event) => {
    updateItem({ ...selectedItem, width: event.target.value });
  };

  const setHeight = (event) => {
    updateItem({ ...selectedItem, height: event.target.value });
  };

  return (
    <Row gutter={[16, 16]} align='middle'>
      <Col xs={24} sm={24} md={24} lg={12} style={{ textAlign: 'center' }}>
        <img
          src={imgSrc}
          alt={name}
          style={{
            width: 'auto',
            height: '140px',
            maxWidth: '280px',
            marginBottom: '16px',
          }}
        />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'flex-strat',
          justifyContent: 'center',
          marginBottom: 0,
        }}
      >
        <DimensionsInput
          onChange={setWidth}
          placeholder='Width'
          value={width}
        />
        <DimensionsInput
          onChange={setHeight}
          placeholder='Height'
          value={height}
        />
        <Button
          type='primary'
          onClick={setRotation}
          icon={<RotateRightOutlined />}
        >
          Rotate Right
        </Button>
        <Button
          type='primary'
          onClick={(e) => setRotation(e, true)}
          icon={<RotateLeftOutlined />}
        >
          Rotate Left
        </Button>
      </Col>
    </Row>
  );
};

export default ResizeControls;
