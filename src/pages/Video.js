import * as React from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";

import styles from '../styles.module.css'
import CustomButton from '../assets/components/CustomButton.js'


import arrowToGoBack from '../assets/icons/BackArrow.svg'
import webexLogo from '../assets/icons/Webex.svg'
import idleIcon from '../assets/icons/IdleCircle.svg'
import hdmiIcon from '../assets/icons/HDMICircle.svg'
import clickshareIcon from '../assets/icons/ClickshareCircle.svg'

import { Switch } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const magentaTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#E20074',
    }
  },
});


const label = { inputProps: { 'aria-label': 'Switch demo' } };


function Video() {

  const [firstModalIsOpen, setFirstModalOpen] = React.useState(false);

  function openFirstModal() {
    setFirstModalOpen(true);
  }

  function closeFirstModal() {
    setFirstModalOpen(false);
  }

  //TODO: Add Api getWebexState for useState 
  const [backgroundModalIsOpen, setBackgroundModalOpen] = React.useState(false);

  function openBackgroundModal() {
    setBackgroundModalOpen(true);
  }

  function closeBackgroundModal() {
    setBackgroundModalOpen(false);
  }

  function closeAllModals() {
    closeFirstModal();
    closeBackgroundModal();
  }

  function startModaldialogue() {
    openBackgroundModal();
    openFirstModal();
  }


  const [checked, setChecked] = React.useState(false);

  const handleSwitchChange = (event) => {

    setChecked(event.target.checked);

    if (event.target.checked) {

      startModaldialogue();

      console.log("Call Api: Activate Webex")
    } else {
      console.log("Call Api: Deactivate Webex")
    }
  };

  return (
    <main className={styles.wrapperVideoBackground}>
      <title>SoundSettings</title>
      <Link to="/"><img src={arrowToGoBack} alt="Load failed" width="100" height="100" className={styles.arrow} /></Link>

      <div className={styles.nonSliderPage}>
        <div className={styles.switchWrapper}>
          <ThemeProvider theme={magentaTheme}>
            <div className={styles.switchButton}>
              <Switch
                {...label}
                color="primary"
                checked={checked}
                onChange={handleSwitchChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>

          </ThemeProvider>

          <p className={styles.defaultText}>Webex</p>

          <img src={webexLogo} alt="Load failed" height="120" className={styles.sliderIcon} />

        </div>

        <div className={styles.buttonWrapper}>
          <CustomButton active={true} icon={idleIcon} buttonName="Idle Mode" />
          <CustomButton active={false} icon={hdmiIcon} buttonName="HDMI 1" />
          <CustomButton active={false} icon={hdmiIcon} buttonName="HDMI 2" />
          <CustomButton active={false} icon={clickshareIcon} buttonName="Clickshare" />
        </div>

        <Modal
          isOpen={backgroundModalIsOpen}
          onRequestClose={closeBackgroundModal}
          contentLabel="Background Modal"
          ariaHideApp={false}
          className={styles.modalBackground}
        >
        </Modal>
        <Modal
          isOpen={firstModalIsOpen}
          onRequestClose={closeFirstModal}
          contentLabel="Help Modal 1"
          ariaHideApp={false}
          className={styles.modalStyling}
        >

          <div className={styles.modalTextWrapper}>
            <div className={styles.modalTextBlue}>To share your screen you need to switch to hdmi input and use the webex tablet.</div>
          </div>

          <div className={styles.modalButtonWrapper}>

            <button onClick={closeAllModals} className={styles.modalButtonBlue}>Okay</button>

          </div>

        </Modal>

      </div>
    </main>
  )
}
export default Video