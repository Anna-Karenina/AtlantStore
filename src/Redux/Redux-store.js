import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import fileReducer from  './FileReducer';
import PostStorageReducer from  './PostStorageReducer';
import customerReducer from  './ConsumerReducer';
import {settingsReducer} from './SettingsReducer'
import { reducer as formReducer } from 'redux-form'

let reducer = combineReducers({
  fileReducer,
  form: formReducer,
  PostStorageReducer,
  customerReducer,
  settingsReducer,
});


const store = createStore(reducer,applyMiddleware(thunk));
window.store = store

export default store;
