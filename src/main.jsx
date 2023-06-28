import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore as createStore } from 'redux'
import {Provider} from 'react-redux'


const initialState = {
  counter: 1
}


const counterReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'INCR_COUNTER':
      return {...state, counter: state.counter+1}
      case 'DECR-COUNTER':
        return state - 1
        default:
          return state
  }
}


const store = createStore(counterReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)