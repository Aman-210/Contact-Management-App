import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import Reducer from './Reducers/Reducer';
// import store from './Store/Store';

const store = configureStore({
  reducer:{
    users : Reducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);