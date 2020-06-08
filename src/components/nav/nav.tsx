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
  <div>
    <button className={styles.styled_button}
      onClick={() => {
        setContent(<FAQ />),
        setIsOpen(true)}}>
        FAQ
    </button>
    <button
      onClick={() => {
        setContent(<Schedule />),
        setIsOpen(true)}}>
        Events
    </button>
    <button
      onClick={() => {
        setContent(<Bio />),
        setIsOpen(true)}}>
        Bios
    </button>
    <button
      onClick={() => alert('Join')}>
        Join
    </button>
    <Modal
      className={styles.Modal}
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