import React from "react";
import PropTypes from "prop-types";
import map from '../../assets/map-wip2.png'
import * as styles from './game.module.css'

import "./game.module.css";

const Game = () => {
  return (
    <div id={styles.gameBoard}>
      <img id={styles.map} src={map}></img>
    </div>
  )
}

export default Game;