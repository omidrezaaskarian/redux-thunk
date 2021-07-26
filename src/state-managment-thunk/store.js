import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    //blacklist: ['productState', 'categoryState'],
    //whitelist:['productState'],
  }

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

export const persistor = persistStore(store);