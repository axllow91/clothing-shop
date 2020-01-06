// middleware is a peace between action and rootreducer are function that receives functions in and passed into the reducer
// catches the action and moves into the next action
import { createStore, applyMiddleware  } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
