import * as React from "react";

import buttonStyles from '../styles/buttonStyles.module.css'


function CustomButton(props) {

    if (props.active) {
        return (
            <button className={buttonStyles.activeButton} onClick={props.clickHandler}>
                <img src={props.icon} alt="Load failed" width="150" height="150" className={buttonStyles.activeButtonIcon} />
                <span className={buttonStyles.activeButtonText}>{props.buttonName}</span>
            </button>
        )
    } else {
        return (
            <button className={buttonStyles.defaultButton} onClick={props.clickHandler}>
                <img src={props.icon} alt="Load failed" width="150" height="150" className={buttonStyles.buttonIcon} />
                <span className={buttonStyles.buttonText}>{props.buttonName}</span>
            </button>
        )
    }
}

export default CustomButton