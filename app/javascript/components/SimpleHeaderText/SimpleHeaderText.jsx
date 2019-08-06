import React from 'react';
import styles from './SimpleHeaderText.sass';

const SimpleHeaderText = (props) => {
    return (
        <div className={styles.SimpleHeaderText}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.subtitle}>{props.subtitle}</p>
        </div>
    );
};

export default SimpleHeaderText;
