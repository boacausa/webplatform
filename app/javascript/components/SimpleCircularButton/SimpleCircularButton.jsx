import React from 'react';
import styles from './SimpleCircularButton.sass';

const SimpleCircularButton = (props) => {
    return (
        <button onClick={props.clicked} className={styles.SimpleCircularButton}>{props.name}</button>
    );
};

export default SimpleCircularButton;
