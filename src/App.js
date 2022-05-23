import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

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
        <Route path="light" element={<Light/>}/>
        <Route path="video" element={<Video/>}/>
        <Route path="sound" element={<Sound/>}/>
        <Route path="blinds" element={<Blinds/>}/>
      </Routes>
    </div>
  );
}

export default App;

function Home() {
  return (
    <>
      <main>
        <div className={styles.welcomeWrapper}>

        <Link to="/light" className={styles.welcomeButton}><img src={lightButton} alt={'Light Button'}/></Link>
        <Link to="/video" className={styles.welcomeButton}><img src={videoButton} alt={'Video Button'}/></Link>
        <Link to="/sound" className={styles.welcomeButton}><img src={soundButton} alt={'Sound Button'}/></Link>
        <Link to="/blinds" className={styles.welcomeButton}><img src={blindsButton} alt={'Blinds Button'}/></Link>

        <img src={helpbutton} alt={'helpButton'} className={styles.welcomeHelp}/>

        </div>
      </main>

    </>
  );
}





