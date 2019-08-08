import React from 'react';
import styles from './TextInput.sass';

const TextInput = (props) => {
    return (
        <div className={styles.TextInput} style={{width: props.width, marginRight: props.marginRight}}>
            <input placeholder={props.placeholder} />
        </div>
    );
};

export default TextInput;
