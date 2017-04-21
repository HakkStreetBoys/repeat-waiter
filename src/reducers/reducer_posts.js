// import _ from 'lodash';
// import {
//   FETCH_POSTS,
//   CREATE_POST,
//   DELETE_POST
// } from '../actions/types';
//
// export default function(state = {}, action) {
//   switch (action.type) {
//     case FETCH_POSTS:
//       return action.payload;
//     case CREATE_POST:
//       return { ...state, ...action.payload };
//     case DELETE_POST:
//       return _.omit(state, action.payload);
//   }
//
//   return state;
// }

import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {};


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:

    default:
      return state;
  }
}
