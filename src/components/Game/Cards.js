import React from 'react'
import { levels } from './Levels'
import styles from './Game.scss'
import Timer from '../Timer/Timer'


class Card extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {  

		return (<li type={this.props.type} id={this.props.id} onClick={this.props.onClick} className={this.props.className}>
			{this.props.children}
		</li>)
	}
}

class CardContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			gameStarted: false,
			level: 'easy',
			matchNumber: '',
			cards: [],
			matches: [],
			queue: []
		}

		this.restartGame = this.restartGame.bind(this)
		this.formatBoard = this.formatBoard.bind(this)
		this.clickEvent = this.clickEvent.bind(this)
		this.flipLater = this.flipLater.bind(this)
		this.hasId = this.hasId.bind(this)
	}

	flipLater(ids) {
		let _cards = this.state.cards
		ids.forEach(id => _cards[id].position = null)

		this.setState({
			cards: _cards,
			queue: []
		})
	}

	restartGame() {
		this.setState({gameStarted: false})
		this.formatBoard()
	}

	clickEvent(id, type) {
		let obj = {}
		obj[id] = type
		let _cards = this.state.cards
		_cards[id].position = 'flipped'

		this.setState({ 
			queue: this.state.queue.concat(obj),
			cards: _cards
		})

		if(this.state.queue.length === 1) {
			if(Object.values(this.state.queue[0])[0] === type) {
				// Empty queue and move items to matches 
				this.setState({
					matches: this.state.matches.concat(this.state.queue.concat(obj)),
					queue: []
				})

			} else {
				let cardsToFlip = this.state.queue.concat(obj)
				cardsToFlip = cardsToFlip.map(card => Object.keys(card)[0])
				
				setTimeout(function() {
					this.flipLater(cardsToFlip)
				}.bind(this), 1000);
			}
		}

		if(this.state.matches.length === this.state.cards.length - this.state.matchNumber) {
			if(this.state.queue.length === 1) {
 				if(Object.values(this.state.queue[0])[0] === type) {
					setTimeout(function() {
						this.restartGame()
					}.bind(this), 1500)
				}
			}
		}
	}

	hasId(id, arr) {
		let match = arr.filter(item => Object.keys(item)[0] == id)
		return match.length > 0;
	}

	formatBoard() {
		let symbols;
		if(this.state.level === 'easy') {
			symbols = levels[0].cards
		}

		if(this.state.level === 'hard') {
			symbols = levels[1].cards
		}

		let cards = symbols.map((symbol) => { // this is prolly not gonna work
			return {
				type: symbol,
				position: null
			}
		})

		this.setState({
			cards: cards,
			matchNumber: (this.state.level === 'easy' || this.state.level === 'hard') ? 2 : 3,
			gameStarted: true
		})
	}

	render() {  
		return (
			<div style={{position: 'relative'}}>
				<div style={this.state.gameStarted ? {display: 'none'} : {display: 'block'}} className={styles.start} onClick={this.formatBoard} />
				<h1 className={styles.header}>NYT Games Code Test</h1>
				<div className={styles.intro}>
					<Timer />
				</div>
				<ul className={styles[this.state.level]}>
					{this.state.cards.map((card, idx) => {
						return <Card key={'card-' + idx} type={card.type} onClick={() => this.clickEvent(idx, card.type)} className={styles[card.position]}>
							<div>
								<figure className={styles.front}></figure>
								<figure className={styles.back}>{card.type}</figure>
							</div>
						</Card>
					})}
				</ul>
			</div>
		)
	}
}



export default CardContainer
