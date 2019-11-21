import React from 'react';
import styles from './AdoptionButton.sass';

const AdoptionButton = (props) => {
    const buttonStyle = props.userRegisteredInterest ? styles.AdoptionButtonDisable : styles.AdoptionButton;

    return (
        <button
            onClick={props.clicked}
            className={buttonStyle}
            disabled={props.userRegisteredInterest}
        >Adotar</button>
    );
};

export default AdoptionButton;
