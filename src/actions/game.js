export const START_GAME = 'START_GAME'
export const TIMER_TICK = 'TIMER_TICK'

export function startGame() {
	return(dispatch, getState) => {

		clearInterval(timer)
		let timer = setInterval(() => dispatch({ type: TIMER_TICK }), 1000)

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
