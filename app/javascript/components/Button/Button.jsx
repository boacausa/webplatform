import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.sass';

const Button = ({ children, onClick }) => (
  <button
    children={children}
    className={styles.Button}
    onClick={onClick}
  />
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
