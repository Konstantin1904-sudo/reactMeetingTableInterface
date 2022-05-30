import * as React from "react";

import styles from '../../styles.module.css'


function CustomButton(props) {

    if (props.active) {
        return (
            <button className={styles.activeButton} onClick={props.clickHandler}>
                <img src={props.icon} alt="Load failed" width="150" height="150" className={styles.activeButtonIcon} />
                <span className={styles.activeButtonText}>{props.buttonName}</span>
            </button>
        )
    } else {
        return (
            <button className={styles.defaultButton} onClick={props.clickHandler}>
                <img src={props.icon} alt="Load failed" width="150" height="150" className={styles.buttonIcon} />
                <span className={styles.buttonText}>{props.buttonName}</span>
            </button>
        )
    }
}

export default CustomButton