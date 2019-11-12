import React from 'react';
import styles from './SimpleSubmitButton.sass';

const SimpleSubmitButton = (props) => {
    return (
        <input className={styles.SimpleSubmitButton} type="submit" value={props.name} />
    );
};

export default SimpleSubmitButton;
