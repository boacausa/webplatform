import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.sass';
import cx from "classnames";

const Button = ({ children, onClick, classStyleModifier }) => (
  <button
    children={children}
    className={cx(styles.Button, classStyleModifier)}
    onClick={onClick}
  />
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
