import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware} from "redux";
import math from './reducers/mathReducer.js';
import user from './reducers/userReducer.js';

export default createStore(
		combineReducers({
			math,
			user
		}),
		{},
		applyMiddleware(logger)
   );