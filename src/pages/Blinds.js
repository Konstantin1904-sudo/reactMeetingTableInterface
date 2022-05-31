import * as React from "react";
import { Link } from "react-router-dom";

import styles from '../styles.module.css'
import ButtonWithClickAnimation from '../assets/components/ButtonWithClickAnimation.js'


import arrowToGoBack from '../assets/icons/BackArrow.svg'
import arrowUp from '../assets/icons/ArrowUpCircle.svg'
import arrowDown from '../assets/icons/ArrowDownCircle.svg'
import minus from '../assets/icons/MinusCircle.svg'


function Blinds() {

    function blindsUp(){
        console.log("call Api to raise blinds")
    }
    function blindsStop(){
        console.log("call Api to stop blinds")
    }
    function blindsDown(){
        console.log("call Api to lower blinds")
    }

    return (
        <main className={styles.wrapperBlindsBackground}>
            <title>SoundSettings</title>
            <Link to="/"><img src={arrowToGoBack} alt="Load failed" width="100" height="100" className={styles.arrow} /></Link>
            <div className={styles.blindsWrapper}>
                <ButtonWithClickAnimation clickHandler={blindsUp} icon={arrowUp} width={300} height={300}/>
                <ButtonWithClickAnimation clickHandler={blindsStop} icon={minus} width={300} height={300}/>
                <ButtonWithClickAnimation clickHandler={blindsDown} icon={arrowDown} width={300} height={300}/>
            </div>
        </main>
    )
}
export default Blinds