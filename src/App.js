import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Modal from 'react-modal';

import styles from './/styles.module.css'
import buttonStyles from './assets/styles/buttonStyles.module.css'
import modalStyles from './assets/styles/modalStyles.module.css'

import helpbutton from './assets/welcomePageButtons/HelpButton.svg'

import lightIcon from './assets/icons/CeilingLamp.svg'
import videoIcon from './assets/icons/Screen.svg'
import soundIcon from './assets/icons/Sound.svg'
import blindsIcon from './assets/icons/Blinds.svg'

import Light from './pages/Light.js'
import Sound from './pages/Sound.js'
import Video from './pages/Video.js'
import Blinds from './pages/Blinds.js'





function App() {

  


  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="light" element={<Light />} />
        <Route path="video" element={<Video />} />
        <Route path="sound" element={<Sound />} />
        <Route path="blinds" element={<Blinds />} />
      </Routes>
    </div>
  );
}

export default App;

function Home() {

  const [firstModalIsOpen, setFirstModalOpen] = React.useState(false);

  function openFirstModal() {
    setFirstModalOpen(true);
  }

  function closeFirstModal() {
    setFirstModalOpen(false);
  }

  const [secondModalIsOpen, setSecondModalOpen] = React.useState(false);

  function openSecondModal() {
    setSecondModalOpen(true);
  }

  function closeSecondModal() {
    setSecondModalOpen(false);
  }

  const [backgroundModalIsOpen, setBackgroundModalOpen] = React.useState(false);

  function openBackgroundModal() {
    setBackgroundModalOpen(true);
  }

  function closeBackgroundModal() {
    setBackgroundModalOpen(false);
  }

  function startModalDialogue() {
    openFirstModal();
    openBackgroundModal();
  }

  function handleNeedHelp() {
    closeFirstModal();
    openSecondModal();

    console.log("Call Need Help Api")
  }


  function closeAllModals() {
    closeFirstModal();
    closeSecondModal();
    closeBackgroundModal();
  }



  return (
    <>
      <main>

        <div className={styles.welcomeWrapper}>

          <Link to="/light" className={styles.welcomeButtonLight}> <img src={lightIcon} className={styles.welcomeButtonIcon} alt={'Light Icon'}/> Light </Link>
          <Link to="/video" className={styles.welcomeButtonVideo}> <img src={videoIcon} className={styles.welcomeButtonIcon} alt={'Video Icon'}/> Video </Link>
          <Link to="/sound" className={styles.welcomeButtonSound}> <img src={soundIcon} className={styles.welcomeButtonIcon} alt={'Sound Icon'}/> Sound </Link>
          <Link to="/blinds" className={styles.welcomeButtonBlinds}> <img src={blindsIcon} className={styles.welcomeButtonIcon} alt={'Blinds Icon'}/> Blinds </Link>


          <button className={buttonStyles.defaultButton} onClick={startModalDialogue}><img src={helpbutton} alt={'helpButton'} className={styles.welcomeHelp} /></button>

          <Modal
            isOpen={backgroundModalIsOpen}
            onRequestClose={closeBackgroundModal}
            contentLabel="Background Modal"
            ariaHideApp={false}
            className={modalStyles.modalBackground}
          >
          </Modal>
          <Modal
            isOpen={firstModalIsOpen}
            onRequestClose={closeFirstModal}
            contentLabel="Help Modal 1"
            ariaHideApp={false}
            className={modalStyles.modalStyling}
          >

            <div className={modalStyles.modalTextWrapper}>
              <div className={modalStyles.modalText}>Do you need help from a member of the technical team?</div>
              <div className={modalStyles.modalText}>Brauchen Sie Hilfe von einem Mitarbeiter aus dem technischen Team?</div>

            </div>

            <div className={modalStyles.modalButtonWrapper}>

              <button onClick={handleNeedHelp} className={modalStyles.modalButtonPrimary}>Yes</button>
              <button onClick={closeAllModals} className={modalStyles.modalButtonSecondary}>No</button>

            </div>

          </Modal>

          <Modal
            isOpen={secondModalIsOpen}
            onRequestClose={closeSecondModal}
            contentLabel="Help Modal 1"
            ariaHideApp={false}
            className={modalStyles.modalStyling}
          >

            <div className={modalStyles.modalTextWrapper}>
              <div className={modalStyles.modalText}>A member of the technical team will be with you shortly.</div>
              <div className={modalStyles.modalSmallText}>Ein Mitarbeiter aus dem technischen Team wird in Kürze bei Ihnen sein.</div>

            </div>

            <div className={modalStyles.modalButtonWrapper}>

              <button onClick={closeAllModals} className={modalStyles.modalButtonPrimary}>Okay</button>

            </div>

          </Modal>

        </div>

      </main>

    </>
  );
}





