import React from 'react'
import styles from './Game.scss'
import { levels } from './Levels'
import Start from './Start'
import FlipMove from 'react-flip-move'
import Card from './Card'
import ProgressBar from './ProgressBar'
import Bullseye from './Bullseye'
import { handleInitialData } from '../../actions/shared'

let lodashShuffle = require('lodash.shuffle')


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

		this.setState((prevState) => {
			cards: prevState.cards.map((card) => {
				ids.forEach((id) => {
					if(card.key.toString() === id) {
						card.position = null
					}
				})

				return card
			})
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
		
		let queueLength = this.state.queue.length

		this.setState((prevState) => {
			cards: prevState.cards.map((card) => {
				if(card.key === id) {
					card.position = 'flipped'
				}

				return card
			})
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
												
						if(this.state.lowestTime[this.state.level] != '') {
							this.setState((prevState) => {
								prevState.lowestTime[this.state.level] = this.state.lowestTime[this.state.level] < this.state.secondsElapsed ? this.state.lowestTime[this.state.level] : this.state.secondsElapsed
								lowestTime: prevState.lowestTime
							})
						} else {
							this.setState((prevState) => {
								prevState.lowestTime[this.state.level] = this.state.secondsElapsed
								lowestTime: prevState.lowestTime
							})
						}

						this.setState({
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

		if(difficulty === 'easy') {
			this.setState({
				level: 'easy',
				matchNumber: 2
			})
			
			symbols = levels[0].cards
		}

		if(difficulty === 'hard') {
			this.setState({
				level: 'hard',
				matchNumber: 2
			})

			symbols = levels[1].cards
		}

		if(difficulty === 'crazy') {
			this.setState({
				level: 'crazy',
				matchNumber: 3
			})

			symbols = levels[2].cards
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
			cards,
			gameStarted: true,
			latestTime: ''
		})

		this.timeInterval = setInterval(this.tick.bind(this), 1000)
		this.shuffleInterval = setInterval(this.shuffle.bind(this), 15000)
	}

	render() { 
		console.log(this.state)
		const formatTime = time => {
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
								<Bullseye />
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
