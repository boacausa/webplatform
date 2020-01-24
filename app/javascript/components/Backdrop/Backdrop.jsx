import React, { useEffect } from 'react';
import styles from './Backdrop.sass';

const backdrop = (props) => {
    useEffect(() => {
        if (props.show) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    });

    if (props.show) {
        return <div className={styles.Backdrop} onClick={props.clicked} />
    } else {
        return null
    }
};

export default backdrop;
