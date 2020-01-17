import React from 'react';
import styles from './Button.sass';

const Button = (props) => (
  <button
    children={props.children}
    className={styles.Button}
    onClick={props.onClick}
  />
);

export default Button;
