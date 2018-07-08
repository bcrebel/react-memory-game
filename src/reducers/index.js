import { combineReducers } from 'redux'
import data from './data'
import level from './level'
import game from './game'

export default combineReducers({
	data,
	level,
	game,
})
