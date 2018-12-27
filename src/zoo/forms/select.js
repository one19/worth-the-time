import React from 'react';
import PropTypes from 'prop-types';
import SelectRoot from 'react-select';
import { field } from 'a-plus-forms';

const Select = ({ onChange, options }) => (
  <SelectRoot onChange={option => onChange(option.value)} options={options} />
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default field()(Select);
