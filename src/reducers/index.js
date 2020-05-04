import { combineReducers } from 'redux';
import messageReducer from './message-reducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  messages: messageReducer,
  firestore: firestoreReducer
});

export default rootReducer;