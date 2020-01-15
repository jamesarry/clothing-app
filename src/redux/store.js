import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//Calling middleWares
const middlewares = [logger];

//Creating the store and passing in the rootReducer and middleWare
const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;