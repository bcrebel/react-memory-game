import React from 'react'
import { levels } from './Levels'
import styles from './Game.scss'


class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			flipped: false, // change based on props
			status: 'none'
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		if(this.state.status === 'none') {
			this.setState({flipped: !this.state.flipped})

			if(this.props.clickEvent(this.props.type) === 'matching') {
				this.setState({status: 'matching'})
			} else if(this.props.clickEvent(this.props.type) === 'matched') {
				console.log('matched')
				this.setState({status: 'matched'})
			} else if(this.props.clickEvent(this.props.type) === 'failed') {
				console.log('failed')

			}
		}
	}


	render() {  

		return (<li type={this.props.type} status={this.state.status} onClick={this.handleClick} className={this.state.flipped ? styles.flipped : null}> 
			{this.props.children}
		</li>)
	}
}

class CardContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			level: 'hard',
			queue: []
		}
		this.gameStatus = this.gameStatus.bind(this)
	}

	gameStatus(symbol) {
		console.log('called')
		if(this.state.queue.length === 0) { 
			console.log(this.state.queue.length)
			this.state.queue.push(symbol)
			console.log('matching')
			return 'matching'
		} 

		if (this.state.queue.length === 1) {
			console.log(this.state.queue[0] === this.state.queue[1])
			if(this.state.queue[0] === symbol) {
				// add to matches
				this.setState({queue: []})
				return 'matched'
			} else {
				console.log(this.state.queue)
				this.setState({queue: []})
				return 'failed'
			}
		}
	}

	render() {  
		const formatCards = level => {
			let symbols;
			if(level === 'easy') {
				this.state.level = 'easy'
				symbols = levels[0].cards
			} else if(level === 'hard') {
				this.state.level = 'hard'
				symbols = levels[1].cards
			}

			return symbols.map((symbol, idx) => 

				<Card key={'card-' + idx} type={symbol} clickEvent={this.gameStatus} id={symbol}>
					<div>
						<figure className={styles.front}></figure>
						<figure className={styles.back}>{symbol}</figure>
					</div>
				</Card>
			)
		}

		return <ul className={styles[this.state.level]}>
			{formatCards(this.state.level)}
		</ul>
	}
}

export default CardContainer
