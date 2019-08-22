import React from 'react';
import styles from './SimpleCircularButton.sass';

const SimpleCircularButton = (props) => {
    return (
        <button className={styles.SimpleCircularButton}>{props.name}</button>
    );
};

export default SimpleCircularButton;
