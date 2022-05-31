import * as React from "react";
import { useState } from 'react';

import buttonStyles from '../../buttonStyle.module.css'


function ButtonWithClickAnimation(props) {



    const [animate, setAnimate] = useState(false);

    const onClickAnimation = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 700);

    }

    if (!animate) {

        return (
            <button className={buttonStyles.defaultButton} onClick={() => { onClickAnimation(); props.clickHandler();}}>
                <img src={props.icon} alt="Load failed" width={props.width} height={props.height} className={buttonStyles.inActiveBlindsButton} />
            </button>
        )
    } else {
        return (

            <button className={buttonStyles.defaultButton} onClick={() => { onClickAnimation(); props.clickHandler();}}>
                <img src={props.icon} alt="Load failed" width={props.width} height={props.height} className={buttonStyles.activeBlindsIcon} />
            </button>
        )
    }


}

ButtonWithClickAnimation.defaultProps = {
    width: 150,
    height: 150,
}

export default ButtonWithClickAnimation