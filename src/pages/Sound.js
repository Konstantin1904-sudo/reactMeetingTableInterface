import * as React from "react";
import {Link} from "react-router-dom";

import styles from '../styles.module.css'

import arrowToGoBack from '../assets/icons/BackArrow.svg'

import soundIcon from '../assets/icons/Sound.svg'
import telekomIcon from '../assets/icons/TelekomLogo.svg'
import muteIcon from '../assets/icons/Mute.svg'

import {Slider} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const blackTheme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
          main: '#000000',
      }
    },
  });

function Sound(){

    return(
      <main className={styles.wrapperSoundBackground}>
          <title>LightSettings</title>
          <Link to="/"><img src = {arrowToGoBack} alt = "Load failed" width="100" height="100" className={styles.arrow}/></Link>
  
          <div className={styles.sliderPage}>
              <div className={styles.buttonWrapper}> 
                  <button className={styles.defaultButton}>
                      <img src = {soundIcon} alt = "Load failed" width="150" height="150" className={styles.buttonIcon}/>
                      <span className={styles.buttonText}>Ambient sound</span>
                  </button>
                  <button className={styles.defaultButton}>
                      <img src = {telekomIcon} alt = "Load failed" width="150" height="150" className={styles.buttonIcon}/>
                      <span className={styles.buttonText}>Telekom gong</span>
                  </button>
              </div>
              <div className={styles.sliderWrapper}>
                  <ThemeProvider theme={blackTheme}>
                      <Slider
                          color = 'primary'
                          orientation = 'vertical'
                          size = 'large'
                          defaultValue = {55}
                      />
                  </ThemeProvider>
                  <button className={styles.sliderButton}><img src = {muteIcon} alt = "Load failed" width="40"  className={styles.sliderIcon}/></button>
              </div>
          </div>
      </main>
  )
  }
  export default Sound