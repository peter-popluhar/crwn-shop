import {createStore, compose} from 'redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import logger from 'redux-logger';
import rootReducer from './root-reducer';

// const middlewares = [logger];
//
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer());

export default store;
