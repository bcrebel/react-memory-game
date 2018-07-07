export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveData(data) {
	return {
		type: RECEIVE_DATA,
		data
	}
}