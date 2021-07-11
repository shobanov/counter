import {combineReducers, createStore} from 'redux'
import {counterReducer} from './counter-reducer'
import {settingsReducer} from './settings-reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined)
