// import Firebase from './firebase';
// import _ from 'lodash';
// import {
//   FETCH_POSTS,
//   DELETE_POST,
//   CREATE_POST
// } from './types';
//
// // Initialize Firebase
// // export const config = firebase.initializeApp({
// //   apiKey: "AIzaSyCe4xhBRH01-H-jJkzBxRd9Mcxm8Et9D6g",
// //   authDomain: "repeat-bc71f.firebaseapp.com",
// //   databaseURL: "https://repeat-bc71f.firebaseio.com",
// //   projectId: "repeat-bc71f",
// //   storageBucket: "repeat-bc71f.appspot.com",
// //   messagingSenderId: "945144509256"
// // });
// var ref = config.database('https://one-time-password-c0c13.firebaseio.com').ref();
//
// export function fetchPosts() {
//   return dispatch => {
//     ref.on('value', snapshot => {
//       dispatch({
//         type: FETCH_POSTS,
//         payload: snapshot.val()
//       });
//     });
//   };
// }
//
// export function createPost(post) {
//   return dispatch => Posts.push(post);
// }
//
// export function deletePost(key) {
//   return dispatch => Posts.child(key).remove();
// }

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=hackstreetboys';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
