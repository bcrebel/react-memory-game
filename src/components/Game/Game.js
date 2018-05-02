import React from 'react'
import Timer from '../Timer/Timer'
import styles from './Game.scss'
import Cards from './Cards'

const Game = () => (
	<div>
		<div className={styles.intro}>
			<h1 className={styles.header}>NYT Games Code Test</h1>
			<Timer />
		</div>
		<Cards />
	</div>
)

export default Game
