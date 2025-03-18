import { Button, Row, Col } from 'antd';

const DeleteControls = ({
  items,
  setItems,
  selectedItem,
  setSelected,
  duplicateItem,
}) => {
  const deleteItem = () => {
    const newItems = items.filter((e) => e.id !== selectedItem.id);
    setItems(newItems);
    setSelected();
  };

  return (
    <Row>
      <Col span={12} style={{ display: 'flex', gap: '16px' }}>
        <Button
          disabled={!selectedItem}
          type='primary'
          onClick={() => duplicateItem({ ...selectedItem, x: 0, y: 0 })}
        >
          Duplicate
        </Button>
        <Button disabled={!selectedItem} type='danger' onClick={deleteItem}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};

export default DeleteControls;
