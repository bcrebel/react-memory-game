import { SET_LEVEL } from '../actions/level'

export default function level(state = {}, action) {

	switch(action.type) {
		case SET_LEVEL:
			return {
				[action.level]: action.cards
			}

		default: 
			return state
	}
}