import { RECEIVE_DATA } from '../actions/data'


export default function data (state = null, action) {
  switch (action.type) {

    case RECEIVE_DATA :

      return {
        ...state,
        ...action.data
      }

    default :
      return state
  }
}
