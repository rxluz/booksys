import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import monitorReducersEnhancer from 'enhancers/monitorReducer'
import loggerMiddleware from 'middleware/logger'
import rootReducer from '.'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(preloadedState) {
  const middlewares = [
    process.env.NODE_ENV === 'development' && loggerMiddleware,
    thunkMiddleware,
  ].filter(Boolean)

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const addReduxDevtoolsInDevMode =
    process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer, addReduxDevtoolsInDevMode].filter(
    Boolean,
  )
  const composedEnhancers = compose(...enhancers)

  let store = createStore(persistedReducer, preloadedState, composedEnhancers)

  let persistor = persistStore(store)

  return { store, persistor }
}
