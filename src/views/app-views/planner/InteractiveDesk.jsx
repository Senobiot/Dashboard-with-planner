import { useState, useRef, useEffect } from 'react';
import { Row, Col, Divider } from 'antd';

import { Upload, Button } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';

const InteractiveDesk = ({ items, setItems }) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef();

  const uploadProps = {
    name: 'file',
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          setItems(jsonData);
        } catch (err) {
          console.error('Error parsing JSON file:', err);
        }
      };
      reader.readAsText(file);
      return false;
    },
  };

  const save = () => {
    const layoutData = items.map((item) => ({
      id: item.id,
      type: item.type,
      width: item.width,
      length: item.length,
      x: item.x || 0,
      y: item.y || 0,
      sku: item.sku,
      imgSrc: item.imgSrc,
    }));

    const jsonString = JSON.stringify(layoutData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.json';
    link.click();
    // const jsonString = JSON.stringify(layoutData, null, 2);
    // const blob = new Blob([jsonString], { type: 'application/json' });
    // const link = document.createElement('a');
    // link.href = URL.createObjectURL(blob);
    // link.download = 'data.json';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };
  const load = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        console.log(json);
      } catch (err) {
        console.error('Error parsing JSON:', err);
      }
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const container = containerRef.current;

    const onMouseMove = (e) => {
      e.preventDefault();
      if (!dragInfo.current.id) return;

      const containerRect = container.getBoundingClientRect();
      const element = container.querySelector(
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

    const onMouseUp = (e) => {
      e.preventDefault();
      setIsDragging(false);
      dragInfo.current.id = null;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mouseleave', onMouseUp);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mouseleave', onMouseUp);
    };
  }, [isDragging]);

  const dragInfo = useRef({
    id: null,
    shiftX: 0,
    shiftY: 0,
  });

  const handleMouseDown = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target;

    dragInfo.current = {
      id,
      shiftX: event.clientX - element.getBoundingClientRect().left,
      shiftY: event.clientY - element.getBoundingClientRect().top,
    };
    setIsDragging(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div
        onMouseDown={handleMouseDown}
        ref={containerRef}
        style={{
          width: '100%',
          height: '500px',
          border: '1px solid #ccc',
          position: 'relative',
          margin: '0 auto',
          overflow: 'hidden',
          background:
            "url('/img/furniture/parquet.jpg') no-repeat 50% / cover ",
        }}
      >
        {items.map((item, idx) => {
          return (
            <img
              key={idx}
              data-id={item.id}
              src={item.imgSrc}
              alt={item.type}
              style={{
                width: `${item.width}px`,
                height: `${item.length}px`,
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
          );
        })}
      </div>
      <Row style={{ marginTop: '10px' }}>
        <Col>
          <Button
            disabled={!items.length}
            type='primary'
            icon={<DownloadOutlined />}
            onClick={save}
          >
            Save scheme
          </Button>
        </Col>
        <Col>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Col>
      </Row>
    </div>
  );
};

export default InteractiveDesk;
