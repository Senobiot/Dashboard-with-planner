import React, { useEffect, useState } from 'react';
import { Select, message, Button, Input, Row, Col, Divider } from 'antd';
import jsonData from 'assets/data/furniture.json';

const { Option, OptGroup } = Select;

const Selectable = ({ onInsert }) => {
  const [dimensions, setDimensions] = useState({ width: 50, height: 50 });
  const [items, setItems] = useState();
  const [groups, setGroups] = useState();
  const [current, setCurrent] = useState();

  useEffect(() => {
    setGroups(Object.keys(jsonData));
    setItems([...Object.values(jsonData).flat()]);
  }, []);

  const handleChange = (value) => {
    const item = items.find((e) => e.sku === value);
    setDimensions({ width: item.width, height: item.length });
    setCurrent(item);
  };

  return (
    <Row>
      <Col span={24}>
        <Select
          showSearch
          placeholder='Select furniture'
          optionFilterProp='children'
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {groups?.map((group) => (
            <OptGroup key={group} label={group}>
              {jsonData[group]?.map((item) => (
                <Option key={item.name} value={item.sku}>
                  {item.name}
                </Option>
              ))}
            </OptGroup>
          ))}
        </Select>
      </Col>
      <Divider />
      <Row>
        <Col span={6}>
          <Input
            type='number'
            placeholder='Высота'
            value={dimensions.height}
            onChange={(e) =>
              setDimensions({ ...dimensions, height: Number(e.target.value) })
            }
          />
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
      <Divider />
      <Col span={12}>
        <Button
          type='primary'
          block
          onClick={() => onInsert({ ...current, ...dimensions })}
        >
          Добавить
        </Button>
      </Col>
    </Row>
  );
};

export default Selectable;
