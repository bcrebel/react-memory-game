import React from 'react'
import { levels } from './Levels'
import styles from './Game.scss'

class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			flipped: false,
			queue: []
		}

		this.toggleClass = this.toggleClass.bind(this)
	}

	toggleClass() {
		const currentState = this.state.flipped;
		this.setState({ flipped: !currentState })
	};

	render() {  

		return (<li className={this.state.flipped ? styles['flipped'] : null} 
			onClick={this.toggleClass}> 
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
		this.addToQueue = this.addToQueue.bind(this)
	}

	addToQueue(symbol) {
		this.state.queue.push(symbol)
		console.log(this.state.queue)
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

				<Card key={idx} id={symbol}>
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
