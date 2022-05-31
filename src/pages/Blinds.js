import * as React from "react";
import { Link } from "react-router-dom";

import styles from '../styles.module.css'
import ButtonWithClickAnimation from '../assets/components/ButtonWithClickAnimation.js'


import arrowToGoBack from '../assets/icons/BackArrow.svg'
import arrowUp from '../assets/icons/ArrowUpCircle.svg'
import arrowDown from '../assets/icons/ArrowDownCircle.svg'
import minus from '../assets/icons/MinusCircle.svg'


function Blinds() {

    return (
        <main className={styles.wrapperBlindsBackground}>
            <title>SoundSettings</title>
            <Link to="/"><img src={arrowToGoBack} alt="Load failed" width="100" height="100" className={styles.arrow} /></Link>
            <div className={styles.blindsWrapper}>
                <ButtonWithClickAnimation icon={arrowUp} width={300} height={300}/>
                <ButtonWithClickAnimation icon={minus} width={300} height={300}/>
                <ButtonWithClickAnimation icon={arrowDown} width={300} height={300}/>
            </div>
        </main>
    )
}
export default Blinds