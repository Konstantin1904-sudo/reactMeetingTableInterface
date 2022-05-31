import * as React from "react";
import {Link} from "react-router-dom";

import styles from '../styles.module.css'
import CustomButton from '../assets/components/CustomButton.js'


import arrowToGoBack from '../assets/icons/BackArrow.svg'
import arrowUp from '../assets/icons/ArrowUpCircle.svg'
import arrowDown from '../assets/icons/ArrowDownCircle.svg'
import minus from '../assets/icons/MinusCircle.svg'


function Blinds(){

    return(
<main className={styles.wrapperBlindsBackground}>
            <title>SoundSettings</title>
            <Link to="/"><img src = {arrowToGoBack} alt = "Load failed" width="100" height="100" className={styles.arrow}/></Link>
            <div className={styles.blindsWrapper}> 
                        <button className={styles.defaultButton}>
                            <img src = {arrowUp}x alt = "Load failed" width="300" height="300" />
                        </button>
                        <button className={styles.defaultButton}>
                            <img src = {minus} alt = "Load failed" width="300" height="300" />
                        </button>                        
                        <button className={styles.defaultButton}>
                            <img src = {arrowDown} alt = "Load failed" width="300" height="300" />
                        </button>

                    </div>
        </main>
  )
  }
  export default Blinds