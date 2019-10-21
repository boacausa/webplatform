import React from 'react';
import styles from './AdoptionButton.sass';

const AdoptionButton = (props) => {
    return (
        <button onClick={props.clicked} className={styles.AdoptionButton}>{props.name}</button>
    );
};

export default AdoptionButton;
