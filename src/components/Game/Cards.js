import React from 'react'
import styles from './Game.scss'
import { levels } from './Levels'
import Start from './Start'
import FlipMove from 'react-flip-move'
let lodashShuffle = require('lodash.shuffle')

function ProgressBar(props) {
	return (
		<div className={styles.progressContainer}>
			<div className={props.className}></div>
		</div>
	);
}

class Card extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {  

		return (
			<li key={this.props.key} type={this.props.type} id={this.props.id} onClick={this.props.onClick} className={this.props.className}>
				{this.props.children}
			</li>
		)
	}
}

class CardContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			gameStarted: false,
			secondsElapsed: 0,
			latestTime: 0,
			lowestTime: {'easy': '', 'hard': '', 'crazy': ''},
			level: 'easy',
			matchNumber: '',
			shuffleDuration: '15',
			cards: [],
			matches: [],
			queue: [],
		}

		this.restartGame = this.restartGame.bind(this)
		this.formatBoard = this.formatBoard.bind(this)
		this.clickEvent = this.clickEvent.bind(this)
		this.flipLater = this.flipLater.bind(this)
		this.shuffle = this.shuffle.bind(this)
	}

	tick() {
		this.setState({
			secondsElapsed: this.state.secondsElapsed + 1,
		})
	}

	flipLater(ids) {
		let _cards = this.state.cards

		ids.forEach((id) => {
			_cards.forEach((card) => {
				if(card.key.toString() === id) {
					card.position = null
				}
			})
		})

		this.setState({
			cards: _cards
		})
	}

	shuffle() {
		this.setState({
			cards: lodashShuffle(this.state.cards)
		})
	}

	restartGame() {
		this.setState({
			gameStarted: false,
			cards: [],
			matches: [],
			queue: []
		})
		
		clearInterval(this.timeInterval)
		clearInterval(this.shuffleInterval)
	}

	clickEvent(id, type) {
		let obj = {}
		obj[id] = type
		let _cards = this.state.cards
		let queueLength = this.state.queue.length

		_cards.forEach((card) => {
			if(card.key === id) {
				card.position = 'flipped'
			}
		})

		this.setState({
			cards: _cards
		})

		if(queueLength === 0) {
			this.setState({ 
				queue: this.state.queue.concat(obj)
			})
		}

		if(queueLength > 0) {
			// Compare current symbol with last symbol in queue
			if(Object.values(this.state.queue[queueLength - 1])[0] === type) {
				if(queueLength < this.state.matchNumber - 1) {
					this.setState({
						queue: this.state.queue.concat(obj)
					})
				} else if(queueLength === this.state.matchNumber - 1) { // Check if winning selection
					if(this.state.matches.length === this.state.cards.length - this.state.matchNumber) {
						
						let _lowestTime = this.state.lowestTime
						
						if(_lowestTime[this.state.level] != '') {
							_lowestTime[this.state.level] = this.state.lowestTime[this.state.level] < this.state.secondsElapsed ? this.state.lowestTime[this.state.level] : this.state.secondsElapsed
						} else {
							_lowestTime[this.state.level] = this.state.secondsElapsed
						}

						this.setState({
							lowestTime: _lowestTime,
							latestTime: this.state.secondsElapsed
						})
						
						clearInterval(this.timeInterval)

						setTimeout(function() {
							this.restartGame()
						}.bind(this), 2000)
					} else {
						this.setState({
							matches: this.state.matches.concat(this.state.queue.concat(obj)),
							queue: []
						})
					}
				}
			} else {
				let cardsToFlip = this.state.queue.concat(obj)
				cardsToFlip = cardsToFlip.map(card => Object.keys(card)[0])
				
				this.setState({queue: []})			

				setTimeout(function() {
					this.flipLater(cardsToFlip)
				}.bind(this), 1000);
			}
		}
	}

	formatBoard(difficulty) {
		let symbols
		let _matchNumber

		if(difficulty === 'easy') {
			this.setState({level: 'easy'})
			symbols = levels[0].cards
			_matchNumber = 2
		}

		if(difficulty === 'hard') {
			this.setState({level: 'hard'})
			symbols = levels[1].cards
			_matchNumber = 2
		}

		if(difficulty === 'crazy') {
			this.setState({level: 'crazy'})
			symbols = levels[2].cards
			_matchNumber = 3
		}

		let cards = symbols.map((symbol, idx) => { 
			return {
				type: symbol,
				position: null,
				key: idx
			}
		})

		this.setState({
			secondsElapsed: 0,
			cards: cards,
			matchNumber: _matchNumber,
			gameStarted: true,
			latestTime: ''
		})

		this.timeInterval = setInterval(this.tick.bind(this), 1000)
		this.shuffleInterval = setInterval(this.shuffle.bind(this), 15000)
	}

	render() { 
		const formatTime = time => {
			console.log(time)
			if (time < 0) return '--:--'
			const h = Math.floor(time / 3600)
			const m = Math.floor((time % 3600) / 60)
			const mm = m < 10 ? `0${m}` : m
			const s = time % 60
			const ss = s < 10 ? `0${s}` : s
			if (h > 0) return [h, mm, ss].join(':')
			return `${m}:${ss}`
		} 
		
		const Timer = ({ time = 0 }) => <p className={styles.timer}>{formatTime(time)}</p>
		let lowestTimeFormat = formatTime(this.state.lowestTime[this.state.level])
		let latestTimeFormat = formatTime(this.state.latestTime)
		let progressClass = this.state.gameStarted ? 'shuffle-15' : null
		
		return (
			<div style={{position: 'relative'}}>
				<div style={this.state.gameStarted ? {display: 'none'} : {display: 'block'}} className={styles.start}>
					<Start newPlayer={this.state.lowestTime[this.state.level] != ''} lowestTime={lowestTimeFormat} latestTime={latestTimeFormat}>
						<p className={styles.level} onClick={() => this.formatBoard('easy')}>Easy</p>
						<p className={styles.level} onClick={() => this.formatBoard('hard')}>Hard</p>
						<p className={styles.level} onClick={() => this.formatBoard('crazy')}>Crazy</p>
					</Start>
				</div>
				<div className={styles.intro}>
					<h1 className={styles.header}>Memory Game</h1>
					<p className={styles.restart} onClick={this.restartGame}>↻</p>
					<div className={styles.stats}>
						<Timer time={this.state.secondsElapsed} />
						{this.state.lowestTime[this.state.level] != '' && 
							<p>Time to beat: {lowestTimeFormat}</p>
						}
					</div>
					<ProgressBar className={styles[progressClass]} />
				</div>
				<FlipMove typeName='ul' className={styles[this.state.level]}>
					{this.state.cards.map((card, idx) => {
						return <Card key={card.key} type={card.type} onClick={() => this.clickEvent(card.key, card.type)} className={styles[card.position]}>
							<div>
								<figure className={styles.front}></figure>
								<figure className={styles.back}>{card.type}</figure>
							</div>
						</Card>
					})}
				</FlipMove>
			</div>
		)
	}
}



export default CardContainer
