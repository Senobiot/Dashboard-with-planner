import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Button, Input, Row, Col, Divider } from 'antd';

const Planner = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 50, height: 50 });
  const containerRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const dragInfo = useRef({
    id: null,
    shiftX: 0,
    shiftY: 0,
  });

  const handleMouseDown = useCallback((event, id) => {
    event.preventDefault();
    const element = event.target;
    dragInfo.current = {
      id,
      shiftX: event.clientX - element.getBoundingClientRect().left,
      shiftY: event.clientY - element.getBoundingClientRect().top,
    };
    setIsDragging(true);
  }, []);

  const handleAddItem = (type) => {
    const newItem = {
      id: Date.now(),
      type,
      x: 50,
      y: 50,
      width: dimensions.width,
      height: dimensions.height,
    };
    setItems([...items, newItem]);
  };

  const handleChange = (e) => {
    setSelectedItem(e.target.value);
    setDimensions({ width: 50, height: 50 });
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const element = document.querySelector(
        `img[data-id="${dragInfo.current.id}"]`
      );

      if (!element) return;

      const newX = Math.max(
        0,
        Math.min(
          e.clientX - containerRect.left - dragInfo.current.shiftX,
          containerRect.width - element.offsetWidth
        )
      );
      const newY = Math.max(
        0,
        Math.min(
          e.clientY - containerRect.top - dragInfo.current.shiftY,
          containerRect.height - element.offsetHeight
        )
      );

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === dragInfo.current.id ? { ...item, x: newX, y: newY } : item
        )
      );
    };

    const onMouseUp = () => {
      setIsDragging(false);
      dragInfo.current.id = null;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>2D</h2>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div style={{ padding: '20px' }}>
            <h2>Select an Option</h2>
            <select
              value={selectedItem}
              onChange={handleChange}
              style={{
                width: '200px',
                padding: '5px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            >
              <option value='' disabled>
                Choose an option
              </option>
              <option value='table'>Table</option>
              <option value='chair'>Chair</option>
              <option value='shelf'>Shelf</option>
            </select>
            <p style={{ marginTop: '10px' }}>
              Selected Option: <b>{selectedItem || 'None'}</b>
            </p>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '10px' }}>
        <Col span={12}>
          <Input
            type='number'
            placeholder='Высота'
            value={dimensions.height}
            onChange={(e) =>
              setDimensions({ ...dimensions, height: Number(e.target.value) })
            }
          />
        </Col>
        <Col span={12}>
          <Input
            type='number'
            placeholder='Ширина'
            value={dimensions.width}
            onChange={(e) =>
              setDimensions({ ...dimensions, width: Number(e.target.value) })
            }
          />
        </Col>
      </Row>
      <Col span={12}>
        <Button
          type='primary'
          block
          onClick={() => selectedItem && handleAddItem(selectedItem)}
        >
          Добавить
        </Button>
      </Col>
      <Divider />
      <div
        ref={containerRef}
        style={{
          width: '600px',
          height: '400px',
          border: '1px solid #ccc',
          position: 'relative',
          margin: '0 auto',
        }}
      >
        {items.map((item) => (
          <img
            key={item.id}
            data-id={item.id}
            src={`/img/furniture/${item.type}.png`}
            alt={item.type}
            style={{
              width: `${item.width}px`,
              height: `${item.height}px`,
              position: 'absolute',
              left: `${item.x}px`,
              top: `${item.y}px`,
              cursor:
                isDragging && dragInfo.current.id === item.id
                  ? 'grabbing'
                  : 'grab',
              userSelect: 'none',
            }}
            onMouseDown={(e) => handleMouseDown(e, item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Planner;
