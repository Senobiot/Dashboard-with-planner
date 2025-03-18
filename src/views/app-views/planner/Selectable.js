import React, { useEffect, useState } from 'react';
import { Select, Button, Row, Col, Divider } from 'antd';
import jsonData from 'assets/data/furniture.json';
import DimensionsInput from 'components/shared-components/DimensionsInput/DimensionsInput';
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
          style={{
            width: '75%',
            borderRadius: '10px',
            backgroundColor: '#f0f0f0',
            border: '1px solid rgb(0, 82, 115)',
          }}
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
        }}
      >
        <DimensionsInput
          placeholder='Height'
          onChange={(e) =>
            setDimensions({ ...dimensions, height: Number(e.target.value) })
          }
          value={dimensions.height}
        />
        <DimensionsInput
          placeholder='Width'
          onChange={(e) =>
            setDimensions({ ...dimensions, width: Number(e.target.value) })
          }
          value={dimensions.width}
        />
      </Col>
      <Divider />
      <Col span={12}>
        <Button
          type='primary'
          block
          onClick={() => onInsert({ ...current, ...dimensions })}
        >
          Add to scheme
        </Button>
      </Col>
    </Row>
  );
};

export default Selectable;
