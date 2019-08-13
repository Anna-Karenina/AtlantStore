import { combineReducers, createStore } from 'redux';
import fileReducer from  './FileReducer';
import { reducer as formReducer } from 'redux-form'

let reducer = combineReducers({
  fileReducer : fileReducer,
  form: formReducer
});


const store = createStore(reducer);
window.store = store

export default store;
