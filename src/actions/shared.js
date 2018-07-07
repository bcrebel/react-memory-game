import { receiveData } from './data'

function getLevels(url) {
	return fetch(url)
		.then((data) => {
			return data.json()
		})
}

function getInitialData() {
	return Promise.all([
		getLevels('https://web-code-test-dot-nyt-games-prd.appspot.com/cards.json'),
		getLevels('https://web-code-test-dot-nyt-games-prd.appspot.com/triples.json')
	]).then((levels) => { 
		return levels
	})
}

export function handleInitialData() {
	return (dispatch) => {
		return getInitialData()
			.then((levels) => {
				levels = { 
					easy: levels[0].levels[0].cards, 
					hard: levels[0].levels[1].cards, 
					crazy: levels[1].cards 
				}

				dispatch(receiveData(levels))
			})
	}
}