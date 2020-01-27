import { combineReducers, createStore } from 'redux';
import fileReducer from  './FileReducer';
import PostStorageReducer from  './PostStorageReducer';
import customerReducer from  './ConsumerReducer';
import { reducer as formReducer } from 'redux-form'

let reducer = combineReducers({
  fileReducer,
  form: formReducer,
  PostStorageReducer,
  customerReducer
});


const store = createStore(reducer);
window.store = store

export default store;
