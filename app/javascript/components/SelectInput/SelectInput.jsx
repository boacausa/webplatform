import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectInput.sass';
import cx from "classnames";

const SelectInput = ({ label, name, placeholder, value, options, width, marginRight, onChange, classStyleModifier }) => (
  <div className={cx(styles.SelectInput, classStyleModifier)} style={{ width, marginRight }}>
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      <option value=''>{placeholder}</option>
      {options && options.length > 0 && options.map(option => (
        <option key={option.id} value={option.id}>{option.name}</option>
      ))}
    </select>
  </div>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string
    })
  ),
  width: PropTypes.string,
  marginRight: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default SelectInput;
