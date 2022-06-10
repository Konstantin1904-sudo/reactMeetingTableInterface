import * as React from "react";
import { useState } from 'react';

import { Link } from "react-router-dom";

import styles from '../styles.module.css'
import sliderStyles from '../assets/styles/sliderStyles.module.css'

import CustomButton from '../assets/components/CustomButton.js'

import arrowToGoBack from '../assets/icons/BackArrow.svg'
import lowIcon from '../assets/icons/LowCircle.svg'
import mediumIcon from '../assets/icons/MediumCircle.svg'
import highIcon from '../assets/icons/HighCircle.svg'
import brightnessIcon from '../assets/icons/Brightness.svg'

import { Slider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const greenTheme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#92CFCA',
        }
    },
});

function Light() {

    const [sliderValue, setSliderValue] = React.useState(30);

    const handleSliderChange = (event, newSliderValue) => {
        setSliderValue(newSliderValue);

        console.log("Make Api Call to Change Brightness to: " + newSliderValue)
    };

    function workingAndMeetingPressed(){
        console.log("Activate Working and Meeting Preset")

        setWorkingAndMeetingState(true)
        setvideoConferenceState(false)
        setMovieSetupState(false)
    }

    function videoConferencePressed(){
        console.log("Activate Video Conference Setup")

        setWorkingAndMeetingState(false)
        setvideoConferenceState(true)
        setMovieSetupState(false)
    }

    function movieSetupPressed(){
        console.log("Activate Video Conference Setup")

        setWorkingAndMeetingState(false)
        setvideoConferenceState(false)
        setMovieSetupState(true)
    }

//TODO: Add Api Call to determine which one is active
    const [workingAndMeetingState, setWorkingAndMeetingState] = useState(false);
    const [videoConferenceState, setvideoConferenceState] = useState(false);
    const [movieSetupState, setMovieSetupState] = useState(false);




    return (
        <main className={styles.wrapperLightBackground}>
            <title>LightSettings</title>
            <Link to="/"><img src={arrowToGoBack} alt="Load failed" width="100" height="100" className={styles.arrow} /></Link>

            <div className={styles.sliderPage}>
                <div className={styles.buttonWrapper}>
                    <CustomButton active={workingAndMeetingState} clickHandler={workingAndMeetingPressed} icon={lowIcon} buttonName="Working & Meeting"/>
                    <CustomButton active={videoConferenceState} clickHandler={videoConferencePressed} icon={mediumIcon} buttonName="Video conference"/>
                    <CustomButton active={movieSetupState} clickHandler={movieSetupPressed} icon={highIcon} buttonName="Movie setup"/>
                </div>
                <div className={sliderStyles.sliderWrapper}>
                    <ThemeProvider theme={greenTheme}>
                        <Slider
                            color='primary'
                            orientation='vertical'
                            size='large'
                            defaultValue={40}
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                    </ThemeProvider>
                    <img src={brightnessIcon} alt="Load failed" width="80" className={sliderStyles.sliderIcon} />
                </div>
            </div>
        </main>
    )
}
export default Light