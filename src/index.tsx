import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {  configureStore } from '@reduxjs/toolkit';



import RootReducer from './components/slices'

import createSagaMiddleware from 'redux-saga'

import { Provider } from 'react-redux';
import { fork, all } from 'redux-saga/effects';
import allSaga from './components/sagas';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export function* rootSaga() {
  yield all([fork(allSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: RootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>



root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
