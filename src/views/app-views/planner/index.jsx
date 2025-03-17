import { useState } from 'react';
import { Button, Row, Col, Divider } from 'antd';
import Selectable from './Selectable';
import InteractiveDesk from './InteractiveDesk';
const Planner = () => {
  const [items, setItems] = useState([]);
  const [layouts, saveLayout] = useState([]);

  const handleAddItem = (item) => {
    const newItem = {
      ...item,
      id: new Date().getTime(),
    };
    setItems([...items, newItem]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>2D</h2>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div style={{ padding: '20px' }}>
            <h2>Select an furniture:</h2>
            <Selectable onInsert={handleAddItem} />
          </div>
        </Col>
      </Row>
      <Divider />
      <InteractiveDesk items={items} setItems={setItems} />
    </div>
  );
};

export default Planner;
