import * as React from "react";
import { Link } from "react-router-dom";

import styles from '../styles.module.css'

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

    return (
        <main className={styles.wrapperLightBackground}>
            <title>LightSettings</title>
            <Link to="/"><img src={arrowToGoBack} alt="Load failed" width="100" height="100" className={styles.arrow} /></Link>

            <div className={styles.sliderPage}>
                <div className={styles.buttonWrapper}>
                    <button className={styles.defaultButton}>
                        <img src={lowIcon} alt="Load failed" width="150" height="150" className={styles.buttonIcon} />
                        <span className={styles.buttonText}>Working & meeting</span>
                    </button>
                    <button className={styles.defaultButton}>
                        <img src={mediumIcon} alt="Load failed" width="150" height="150" className={styles.buttonIcon} />
                        <span className={styles.buttonText}>Video conference</span>
                    </button>
                    <button className={styles.defaultButton}>
                        <img src={highIcon} alt="Load failed" width="150" height="150" className={styles.buttonIcon} />
                        <span className={styles.buttonText}>Movie setup</span>
                    </button>
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