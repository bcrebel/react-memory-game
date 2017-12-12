import React from 'react'

import Timer from '../Timer/Timer'
import styles from './Game.scss'

const Game = () => (
  <div>
    <h1 className={styles.header}>NYT Games Code Test</h1>
    <Timer />
    <div className={styles.placeholder}>Let the games begin (here).</div>
  </div>
)

export default Game
