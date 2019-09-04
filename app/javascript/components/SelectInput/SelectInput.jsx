import React from 'react';
import styles from './SelectInput.sass';

const SelectInput = (props) => {
    return (
        <div className={styles.SelectInput} style={{width: props.width, marginRight: props.marginRight}}>
            <label>{props.label}</label>
            <select name="color">
                <option value="">{props.placeholder}</option>
            </select>
        </div>
    );
};

export default SelectInput;