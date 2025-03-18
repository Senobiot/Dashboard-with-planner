import { useState } from 'react';
import { Row, Col, Collapse } from 'antd';
import Selectable from './Selectable';
import SaveControls from './SaveControls';
import InteractiveDesk from './InteractiveDesk';
import ResizeControls from './ResizeControls';
import DeleteControls from './DeleteControls';
const { Panel } = Collapse;

const PlannerBoard = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState();

  const updateItem = (item) => {
    const updatedItems = items.map((e) => (e.id === item.id ? item : e));
    setSelected(item);
    setItems(updatedItems);
  };

  const handleAddItem = (item) => {
    const newItem = {
      ...item,
      id: new Date().getTime(),
    };
    setItems([...items, newItem]);
  };

  return (
    <div style={{ padding: '10px' }}>
      <h2>2D planing tool</h2>
      <Collapse defaultActiveKey={['1']}>
        <Panel header='Hide / show controls ' key='1'>
          <Row
            gutter={[16, 16]}
            style={{
              minHeight: '400px',
              padding: 10,
            }}
          >
            <Col span={12}>
              <div style={{ padding: '20px' }}>
                <h2>Select an furniture:</h2>
                <Selectable onInsert={handleAddItem} />
              </div>
            </Col>
            {!selected ? (
              <Row align='middle' justify='center'>
                Please add some furniture to scheme then click on it and edit
              </Row>
            ) : (
              <Col span={12}>
                <div style={{ padding: '20px' }}>
                  <h2>Edit params:</h2>
                  <h4>{`${selected.name} [SKU] ${selected.sku}`}</h4>
                  <ResizeControls
                    selectedItem={selected}
                    updateItem={updateItem}
                  />
                  <DeleteControls
                    items={items}
                    setItems={setItems}
                    selectedItem={selected}
                    setSelected={setSelected}
                    duplicateItem={handleAddItem}
                  />
                </div>
              </Col>
            )}
          </Row>
        </Panel>
      </Collapse>

      <InteractiveDesk
        items={items}
        setItems={setItems}
        setSelected={setSelected}
      />
      <SaveControls list={items} setList={setItems} />
    </div>
  );
};

export default PlannerBoard;
