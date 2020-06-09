import React, { useState }from 'react';
import Modal from 'react-modal'
import * as styles from './nav.module.css'
import FAQ from '../faq'
import Schedule from '../schedule'
import Bio from '../bio/bio'
// const togglePop = ({children}) => 
  
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
      onClick={() => {
        setContent(<FAQ />),
        setIsOpen(true)}}>
        FAQ
    </h3>
    <h3
      onClick={() => {
        setContent(<Schedule />),
        setIsOpen(true)}}
      >
        Events
    </h3>
    <h3
      onClick={() => {
        setContent(<Bio />),
        setIsOpen(true)}}>
        Bios
    </h3>
    <h3
      onClick={() => alert('Join')}>
        Join
    </h3>
    <Modal
      id={styles.Modal}
      className='nes-container is-dark is-rounded'
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