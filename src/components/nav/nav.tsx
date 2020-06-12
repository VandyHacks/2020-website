import React, { useState }from 'react';
import Modal from 'react-modal'
import * as styles from './nav.module.css'
import FAQ from '../faq'
import Schedule from '../schedule'
import Bio from '../bio/bio'
import sword from '../../assets/horizontal-goldsword.png';
  
Modal.setAppElement(document.getElementById('root'));
const Nav: React.FC<{}> = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(<FAQ />)
  function closeModal(){
    setIsOpen(false);
  }
  return (
  <div id={styles.nav}>
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <h3
      className={styles.option}
      id={styles.faq_button}
      onClick={() => {
        setContent(<FAQ />),
        setIsOpen(true)}}>
        FAQ
    </h3>
    <h3
      className={styles.option}
      id={styles.events_button}
      onClick={() => {
        setContent(<Schedule />),
        setIsOpen(true)}}>
        Events
    </h3>
    <h3
      className={styles.option}
      id={styles.bios_button}
      onClick={() => {
        setContent(<Bio />),
        setIsOpen(true)}}>
        Bios
    </h3>
    <h3
      className={styles.option}
      id={styles.join_button}
      onClick={() => alert('Join')}>
        Join
    </h3>
    <img className={styles.sword} id={styles.faq_sword} src={sword} alt="faq sword" /> 
    <img className={styles.sword} id={styles.events_sword} src={sword} alt="events sword" /> 
    <img className={styles.sword} id={styles.bios_sword} src={sword} alt="bios sword" /> 
    <img className={styles.sword} id={styles.join_sword} src={sword} alt="join sword" /> 
    <Modal
      className={styles.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='Modal Window'
    >
      {content}
    </Modal>
  </div>
  )
}
export default Nav