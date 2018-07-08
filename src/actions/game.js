export const START_GAME = 'START_GAME'

export function startGame() {
	return(dispatch, getState) => {

		const cards = getState().data[getState().level.difficulty].map((symbol, idx) => {
			 return {
				type: symbol,
				position: null,
				key: idx
			}
		})

		dispatch({
			type: START_GAME,
			cards
		})
	}
}
