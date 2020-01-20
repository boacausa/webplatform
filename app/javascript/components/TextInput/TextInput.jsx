import React from 'react';
import styles from './TextInput.sass';

const TextInput = (props) => {
    return (
        <div className={styles.TextInput} style={{width: props.width, marginRight: props.marginRight}}>
            <input value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    );
};

export default TextInput;
