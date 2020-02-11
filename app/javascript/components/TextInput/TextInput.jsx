import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.sass';
import cx from "classnames";

const TextInput = ({ value, placeholder, width, marginRight, onChange, classStyleModifier }) => (
  <div className={cx(styles.TextInput, classStyleModifier)} style={{ width, marginRight }}>
      <input value={value} placeholder={placeholder} onChange={onChange} />
  </div>
);

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  marginRight: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextInput;
