import React from 'react'
import styles from './Game.scss'
import { handleInitialData } from '../../actions/shared'
import { connect } from 'react-redux'

class Start extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		const greeting = this.props.newPlayer ? 'Ready for Another Round?' : 'Memory Game'
		const prompt = this.props.lowestTime === this.props.latestTime ? 'Congrats! You made a new time:' : 'Latest Time:'
		const Time = (
			<div>
				<p className={styles.prompt}>{prompt}</p> 
				{this.props.lowestTime === this.props.latestTime &&
					<p className={styles.time}>{this.props.lowestTime}</p>
				}
				{this.props.latestTime != this.props.lowestTime && 
					<div>
						<p className={styles.time}>{this.props.latestTime === '0:00' ? '--:--' : this.props.latestTime}</p>
						<p>Time to Beat:</p>
						<p className={styles.time}>{this.props.lowestTime}</p>
					</div>
				}
			</div>
		)

		return (
			<div >
				<div style={this.props.loading 
					? { display: 'block' } : { display: 'none' }} className={styles.loading}></div>
				<h1>{greeting}</h1>
				{this.props.lowestTime != '0:00' && Time}
				<p>Choose your level:</p>
				{this.props.children}
			</div>
		)
	}
}

function mapStateToProps({ data }) {

	return {
		loading: data === null
	}  
}

export default connect(mapStateToProps)(Start)
