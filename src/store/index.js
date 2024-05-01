import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import * as api from '../config'
import { rootReducer } from './root-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
)
