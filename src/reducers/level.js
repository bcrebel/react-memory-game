import { SET_LEVEL } from '../actions/level'

export default function level(state = {}, action) {

	switch(action.type) {
		case SET_LEVEL:
			return {
				difficulty: action.level,
				matchNumber: action.level === 'crazy' ? 3 : 2
			}

		default: 
			return state
	}
}