import * as React from "react";
import { useState } from 'react';

import styles from '../../styles.module.css'


function ButtonWithClickAnimation(props) {



    const [animate, setAnimate] = useState(false);

    const onClickAnimation = () => {
        console.log("animate triggered")
        setAnimate(true);
        setTimeout(() => setAnimate(false), 700);

    }

    if (!animate) {

        return (
            <button className={styles.defaultButton} onClick={onClickAnimation}>
                <img src={props.icon} alt="Load failed" width={props.width} height={props.height} className={styles.inActiveBlindsButton} />
            </button>
        )
    } else {
        return (

            <button className={styles.defaultButton} onClick={onClickAnimation}>
                <img src={props.icon} alt="Load failed" width={props.width} height={props.height} className={styles.activeBlindsIcon} />
            </button>
        )
    }


}

ButtonWithClickAnimation.defaultProps = {
    width: 150,
    height: 150,
}

export default ButtonWithClickAnimation