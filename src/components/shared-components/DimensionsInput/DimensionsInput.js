import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

export const DimensionsInput = ({
  value = 0,
  placeholder = '',
  onChange,
  disabled = false,
  measures = 'cm',
}) => {
  return (
    <Input.Group compact>
      <Input
        disabled={disabled}
        type='number'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '80px',
          backgroundColor: '#f0f0f0',
          border: '3px solid rgb(0, 82, 115)',
        }}
      />
      <span style={{ marginLeft: '8px', color: '#555' }}>
        {placeholder} in {measures}
      </span>{' '}
    </Input.Group>
  );
};

DimensionsInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default DimensionsInput;
