import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Modal from 'react-modal';


import styles from './/styles.module.css'

import lightButton from './assets/welcomePageButtons/LightButton.svg'
import videoButton from './assets/welcomePageButtons/VideoButton.svg'
import soundButton from './assets/welcomePageButtons/SoundButton.svg'
import blindsButton from './assets/welcomePageButtons/BlindsButton.svg'
import helpbutton from './assets/welcomePageButtons/HelpButton.svg'

import Light from './pages/Light.js'
import Sound from './pages/Sound.js'
import Video from './pages/Video.js'
import Blinds from './pages/Blinds.js'





function App() {

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

          <Link to="/light" className={styles.welcomeButton}><img src={lightButton} alt={'Light Button'} /></Link>
          <Link to="/video" className={styles.welcomeButton}><img src={videoButton} alt={'Video Button'} /></Link>
          <Link to="/sound" className={styles.welcomeButton}><img src={soundButton} alt={'Sound Button'} /></Link>
          <Link to="/blinds" className={styles.welcomeButton}><img src={blindsButton} alt={'Blinds Button'} /></Link>

          <button className={styles.defaultButton} onClick={startModalDialogue}><img src={helpbutton} alt={'helpButton'} className={styles.welcomeHelp} /></button>

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
              <div className={styles.modalText}>Do you need help from a member of the technical team?</div>
              <div className={styles.modalSmallText}>Brauchen Sie Hilfe von einem Mitarbeiter aus dem technischen Team?</div>

            </div>

            <div className={styles.modalButtonWrapper}>

              <button onClick={handleNeedHelp} className={styles.modalButtonPrimary}>Yes</button>
              <button onClick={closeAllModals} className={styles.modalButtonSecondary}>No</button>

            </div>

          </Modal>

          <Modal
            isOpen={secondModalIsOpen}
            onRequestClose={closeSecondModal}
            contentLabel="Help Modal 1"
            ariaHideApp={false}
            className={styles.modalStyling}
          >

            <div className={styles.modalTextWrapper}>
              <div className={styles.modalText}>A member of the technical team will be with you shortly.</div>
              <div className={styles.modalSmallText}>Ein Mitarbeiter aus dem technischen Team wird in Kürze bei Ihnen sein.</div>

            </div>

            <div className={styles.modalButtonWrapper}>

              <button onClick={closeAllModals} className={styles.modalButtonPrimary}>Okay</button>

            </div>

          </Modal>

        </div>

      </main>

    </>
  );
}





