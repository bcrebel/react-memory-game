import { START_GAME } from '../actions/game'
import { TIMER_TICK } from '../actions/game'
import { FLIP_CARD } from '../actions/game'
import { QUEUE_CARD } from '../actions/game'
import { ADD_RECORD } from '../actions/game'
import { RESTART_GAME } from '../actions/game'
import { ADD_MATCH } from '../actions/game'
import { EMPTY_QUEUE } from '../actions/game'

const initialState = {
	started: false,
	lowestTime: { 'easy': '', 'hard': '', 'crazy': '' }
}

export default function game(state = initialState, action) {
	switch(action.type) {

		case START_GAME: 
			return {
				...state,
				started: true,
				cards: action.cards,
				queue: [],
				matches: [],
				secondsElapsed: 0,
				newRecord: false
			}

		case TIMER_TICK: 
			return {
				...state,
				secondsElapsed: state.secondsElapsed + 1
			}

		case FLIP_CARD: 
			return {
				...state,
				cards: action.cards
			}

		case QUEUE_CARD: 
			return {
				...state,
				queue: state.queue.concat(action.card)
			}

		case EMPTY_QUEUE:
			return {
				...state,
				queue: action.queue
			}

		case ADD_MATCH: 
			return {
				...state,
				matches: state.matches.concat(action.cards),
				queue: action.queue
			}

		case ADD_RECORD:

			return {
				...state,
				lowestTime: {
					...state.lowestTime,
					...action.record
    		},
    		newRecord: action.newRecord
			}

		case RESTART_GAME: 

			return {
				gameStarted: action.gameStarted,
			}

		default: 
			return state
	}
}