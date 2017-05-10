import { FETCH_POSTS } from '../actions/index'

const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_POSTS:
		/* falls through */
		default:
			return state
	}
}
