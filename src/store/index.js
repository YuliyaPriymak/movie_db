import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import createRootReducer from '../reducers'

export const store = createStore(createRootReducer(), applyMiddleware(thunk));