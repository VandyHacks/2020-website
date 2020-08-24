import React from 'react';
import * as styles from './window.module.css'

const Window: ((props?: any) => JSX.Element) = props => {
  // const [arrowDirection, setArrowDirection] = useState('down');
  // const [content, setContent] = useState(topText)
  // function toggleDisplay() {
  //   arrowDirection == 'up' ? setArrowDirection('down') : setArrowDirection('up');
  //   content == topText ? setContent(bottomText) : setContent(topText);
  // }

  // TEST ITEMS DELETE LATER
  // const content = '<CONTENT GOES HERE>'

  return (
    <div id={styles.window} className='nes-container is-dark is-rounded'>
      <div>
        {props.content}
        {/* TODO: Make the text slide up and down */}
      </div>
      {/* <img id={styles[arrowDirection]} onClick={toggleDisplay} src={DownArrow} alt="DownArrow" /> */}
    </div>
  )
}
export default Window