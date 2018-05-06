import React from 'react'

class Start extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const greeting = this.props.newPlayer ? 'Ready for Another Round?' : 'Welcome to Memory!'
		const prompt = this.props.lowestTime === this.props.latestTime ? 'Congrats! You made a new time' : 'Latest Time:'
		
		const Time = (
			<div>
				<p>{prompt}</p> 
				{this.props.lowestTime === this.props.latestTime &&
					<p>{this.props.lowestTime}</p>
				}
				{this.props.latestTime > this.props.lowestTime &&
					<div>
						<p>{this.props.latestTime}</p>
						<p>Time to Beat:</p>
						<p>{this.props.lowestTime}</p>
					</div>
				}
			</div>
		)

		return (
			<div>
				<h1>{greeting}</h1>
				{this.props.lowestTime != '0:00' && Time}
				<p>Choose your level</p>
				{this.props.children}
			</div>
		)
	}
}

export default Start