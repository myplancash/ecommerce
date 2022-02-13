import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// allow our browser to cache our store depending on certain configs
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {store, persistor};