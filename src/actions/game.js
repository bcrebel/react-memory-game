export const START_GAME = 'START_GAME'
export const TIMER_TICK = 'TIMER_TICK'
export const FLIP_CARD = 'FLIP_CARD'
export const QUEUE_CARD = 'QUEUE_CARD'
export const ADD_RECORD = 'ADD_RECORD'
export const RESTART_GAME = 'RESTART_GAME'
export const ADD_MATCH = 'ADD_MATCH'
export const EMPTY_QUEUE = 'EMPTY_QUEUE'

function restartGame() {
	return {
		type: RESTART_GAME,
		gameStarted: false,
	}
}

export function startGame() {
	return(dispatch, getState) => {

		clearInterval(timer)
		let timer = setInterval(() => dispatch({ type: TIMER_TICK }), 1000)

		let set = getState().data[getState().level.difficulty].map((symbol, idx) => {
			 return {
				type: symbol,
				position: null,
				key: idx
			}
		})

		dispatch({
			type: START_GAME,
			cards: set,
			newRecord: false
		})
	}
}

export function handleFlip(id, type) {

	return (dispatch, getState) => {
		let priorQueue = getState().game.queue
		let queue = () => getState().game.queue
		let queueLength = () =>  getState().game.queue.length
		let matchLength = getState().game.matches.length
		let matchNumber = getState().level.matchNumber
		let deckLength =  getState().game.cards.length
		let currCard = { [id]: type }
		let level = getState().level.difficulty
		let lowestTime = () => getState().game.lowestTime[level]
		let secondsElapsed = () => getState().game.secondsElapsed

		let positionCards = getState().game.cards.map((card) => {
			return card.key === id ? Object.assign(card, { position: 'flipped' }) : card
		})

		dispatch({
			type: FLIP_CARD,
			cards: positionCards
		})

		if(queueLength() === 0) {
			dispatch({
				type: QUEUE_CARD,
				card: currCard
			})
		}

		if(priorQueue.length > 0) {
			// Compare current symbol with last symbol in queue
			if(Object.values(queue()[queueLength() - 1])[0] === type) {
				// If queue has not reached matchNumber - 1
				if(queueLength() < matchNumber - 1) {

					dispatch({
						type: QUEUE_CARD,
						card: currCard
					})
				} else if(queueLength() === matchNumber - 1) { // Check if winning selection

					if(matchLength === deckLength - matchNumber) { // Game is won
						if(lowestTime() != '') {
							if(secondsElapsed() < lowestTime()) {
								dispatch({
									type: 'ADD_RECORD',
									record: { [level]: secondsElapsed },
									newRecord: true
								})
							}
						} else {
							dispatch({
								type: 'ADD_RECORD',
								record: { [level]: secondsElapsed() },
								newRecord: true
							})
						}

						setTimeout(restartGame(), 2000)
					} else { // a match short of winning
						dispatch({
							type: ADD_MATCH,
							cards: priorQueue.concat(currCard),
							queue: []
						})
					}
				}
			} else {
				dispatch({
					type: EMPTY_QUEUE,
					queue: []
				})
			}
		}
	}
}		
