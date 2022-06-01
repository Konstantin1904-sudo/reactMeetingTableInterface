import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

import styles from '../styles.module.css'
import sliderStyles from '../assets/styles/sliderStyles.module.css'
import CustomButton from '../assets/components/CustomButton.js'
import ButtonWithClickAnimationAndText from '../assets/components/ButtonWithClickAnimationWithText.js'


import arrowToGoBack from '../assets/icons/BackArrow.svg'

import soundIcon from '../assets/icons/SoundCircle.svg'
import telekomIcon from '../assets/icons/TelekomLogoCircle.svg'
import muteIcon from '../assets/icons/Mute.svg'

import { Slider } from '@mui/material';
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

function Sound() {

    const [sliderValue, setSliderValue] = React.useState(30);

    const handleSliderChange = (event, newSliderValue) => {
        setSliderValue(newSliderValue);

        console.log("Make Api Call to Change Volume to: " + newSliderValue)
    };

    const [ambientSounActivated, setAmbientSound] = useState(false)

    function ambientSoundToggle(){
        setAmbientSound(!ambientSounActivated);
        console.log("make Api Call to toggle Ambient Sound")
    }

    
    function muteButtonPressed(){
        console.log("Make Api Call to mute Sound")
        setSliderValue(0);
    }

    function activateTelekomGong(){
        console.log("Api call to activate the Telekom Gong")
    }

    return (
        <main className={styles.wrapperSoundBackground}>
            <title>LightSettings</title>
            <Link to="/"><img src={arrowToGoBack} alt="Load failed" width="100" height="100" className={styles.arrow} /></Link>

            <div className={styles.sliderPage}>
                <div className={styles.buttonWrapper}>
                    <CustomButton active={ambientSounActivated} icon={soundIcon} clickHandler={ambientSoundToggle} buttonName="Ambient sound" />
                    <ButtonWithClickAnimationAndText clickHandler={activateTelekomGong}icon={telekomIcon} buttonName="Telekom Gong" />
                </div>
                <div className={sliderStyles.sliderWrapper}>
                    <ThemeProvider theme={blackTheme}>
                        <Slider
                            color='primary'
                            orientation='vertical'
                            size='large'
                            defaultValue={55}
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                    </ThemeProvider>
                    <button className={sliderStyles.sliderButton} onClick={muteButtonPressed}><img src={muteIcon} alt="Load failed" width="40" className={styles.sliderIcon} /></button>
                </div>
            </div>
        </main>
    )
}
export default Sound