import { useState, useRef, useEffect } from 'react';

const InteractiveDesk = ({ items, setItems, setSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef();
  const idKey = 'data-id';

  const dragInfo = useRef({
    id: null,
    shiftX: 0,
    shiftY: 0,
  });

  useEffect(() => {
    if (!isDragging) return;

    const container = containerRef.current;

    const onMouseMove = (e) => {
      e.preventDefault();
      if (!dragInfo.current.id) return;

      const containerRect = container.getBoundingClientRect();
      const element = container.querySelector(
        `img[${idKey}="${dragInfo.current.id}"]`
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
  }, [isDragging, setItems]);

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

  const handlClick = (event) => {
    const item = items.find(
      (e) => e.id === Number(event.target.getAttribute(idKey))
    );
    setSelected(item);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <div
        onMouseDown={handleMouseDown}
        onClick={handlClick}
        ref={containerRef}
        style={{
          width: '1600px',
          height: '500px',
          border: '1px solid #ccc',
          position: 'relative',
          background:
            "url('/img/furniture/parquet.jpg') no-repeat 50% / cover ",
        }}
      >
        {items.map((item, idx) => {
          const { id, imgSrc, type, width, height, angle } = item;
          return (
            <img
              key={idx}
              data-id={id}
              src={imgSrc}
              alt={type}
              style={{
                width: `${width}px`,
                height: `${height}px`,
                position: 'absolute',
                left: `${item.x}px`,
                top: `${item.y}px`,
                transform: angle ? `rotate(${angle}deg)` : '',
                cursor:
                  isDragging && dragInfo.current.id === id
                    ? 'grabbing'
                    : 'grab',
                userSelect: 'none',
              }}
              onMouseDown={(e) => handleMouseDown(e, id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveDesk;
