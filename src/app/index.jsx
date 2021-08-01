import App from './App';
import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/reducers';

function configureStore() {
  const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
  const store = createStore(rootReducer, composedEnhancer);

  return store
}

const store = configureStore();

const AppWithStore = () => <Provider store={store}><App/></Provider >

export default AppWithStore;