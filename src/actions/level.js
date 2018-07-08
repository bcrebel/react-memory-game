export const SET_LEVEL = 'SET_LEVEL'

export function setLevel(level) {
	return(dispatch, getState) => {
		const cards = getState().data[level]

		dispatch({
			type: SET_LEVEL,
			level,
			cards
		})
	}
}
