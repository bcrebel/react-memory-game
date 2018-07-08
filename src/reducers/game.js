import { START_GAME } from '../actions/game'
import { TIMER_TICK } from '../actions/game'

export default function game(state = { started: false }, action) {
	switch(action.type) {

		case START_GAME: 
			return {
				started: true,
				cards: action.cards,
				queue: [],
				matches: [],
				secondsElapsed: 0
			}

		case TIMER_TICK: 
			return {
				...state,
				secondsElapsed: state.secondsElapsed + 1
			}

		default: 
			return state
	}
}