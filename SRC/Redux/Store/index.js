import {createStore, applyMiddleware} from 'redux';
import reducers from '../Reducers';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
export default createStore(reducers, {}, composedEnhancers);
