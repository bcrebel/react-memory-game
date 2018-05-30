import React from 'react'
import styles from './Game.scss'

const ProgressBar = (props) => {
	return (
		<div className={styles.progressContainer}>
			<div className={props.className}></div>
		</div>
	);
}

export default ProgressBar