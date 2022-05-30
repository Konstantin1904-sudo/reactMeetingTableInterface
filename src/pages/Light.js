import * as React from "react";
import { useState } from 'react';

import { Link } from "react-router-dom";

import styles from '../styles.module.css'

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
            main: '#98CA97',
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

        setWorkingAndMeetingState('activeButton')
    }


    const [workingAndMeetingState, setWorkingAndMeetingState] = useState('defaultButton');




    return (
        <main className={styles.wrapperLightBackground}>
            <title>LightSettings</title>
            <Link to="/"><img src={arrowToGoBack} alt="Load failed" width="100" height="100" className={styles.arrow} /></Link>

            <div className={styles.sliderPage}>
                <div className={styles.buttonWrapper}>
                    <CustomButton active={true} icon={lowIcon} buttonName="Working & Meeting"/>
                    <CustomButton active={false} icon={mediumIcon} buttonName="Video conference"/>
                    <CustomButton active={false} icon={highIcon} buttonName="Movie setup"/>
                </div>
                <div className={styles.sliderWrapper}>
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
                    <img src={brightnessIcon} alt="Load failed" width="80" className={styles.sliderIcon} />
                </div>
            </div>
        </main>
    )
}
export default Light