import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { mainReducer } from "./reducers/mainReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log('*********', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
   <App /> 
</Provider>
, rootElement);
