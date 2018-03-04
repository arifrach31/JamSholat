import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import {API_URL} from '../constants';
import promiseMiddleware from 'redux-promise-middleware';

//REDUCER
const usersInitialState = {
  username: ""
};
const usersReducer = function(state = usersInitialState, action){
  switch (action.type) {
    case 'USERS_CHANGE_USERNAME':
      state = {...state, username: action.payload}
      break;
    default:
      state;
  }
  return state;
}

const waktuInitialState = {
  waktu: [],
  isLoading: false
}
const waktuReducer = function(state = waktuInitialState, action){
  switch (action.type) {
    case "WAKTU_SHOLAT_PENDING":
      state = {...state, isLoading: true}
      break;
    case "WAKTU_SHOLAT_FULFILLED":
      state = {...state, isLoading: false, waktu: action.payload.data}
      break;
    default:
      state;
  }
  return state;
}

//STORE
const rootReducers = combineReducers({
  usersReducer,
  waktuReducer
});

const middlewares = applyMiddleware(
  promiseMiddleware()
);
 
const store = createStore(rootReducers, middlewares);

//SUBSCRIPTIONS
store.subscribe(()=> {
  console.log(store.getState());
})

//DISPATCHER
store.dispatch({
  type: "WAKTU_SHOLAT",
  payload: axios.get(`${API_URL}/jamsholat`)
})
