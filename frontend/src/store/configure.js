/*
  스토어 설정파일
*/
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [ReduxThunk];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLES_EXTENDSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
  applyMiddleware(...middlewares)
));

export default configure;