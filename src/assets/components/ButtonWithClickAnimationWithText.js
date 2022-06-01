import * as React from "react";
import { useState } from 'react';

import buttonStyles from '../styles/buttonStyles.module.css'


function ButtonWithClickAnimation(props) {



    const [animate, setAnimate] = useState(false);

    const onClickAnimation = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 700);

    }

    if (!animate) {

        return (
            <button className={buttonStyles.defaultButton} onClick={() => {onClickAnimation(); props.clickHandler()}}>
                <img src={props.icon} alt="Load failed" width={props.width} height={props.height} className={buttonStyles.buttonIcon} />
                <span className={buttonStyles.buttonText}>{props.buttonName}</span>
            </button>
        )
    } else {
        return (

            <button className={buttonStyles.defaultButton} onClick={() => {onClickAnimation(); props.clickHandler()}}>
                <img src={props.icon} alt="Load failed" width={props.width} height={props.height} className={buttonStyles.activeButtonIcon} />
                <span className={buttonStyles.activeButtonText}>{props.buttonName}</span>
            </button>
        )
    }


}

ButtonWithClickAnimation.defaultProps = {
    width: 150,
    height: 150,
}

export default ButtonWithClickAnimation