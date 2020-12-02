import React from "react";
import Counter from "./Counter";
import {createStore, combineReducers} from 'redux';
import countReducer from './countReducer';
import productReducer from './productReducer';
import Modal from './Modal';
import modalReducer from './modalReducer';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({
  countState: countReducer,
  modalState: modalReducer,
  productState: productReducer
}), composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="anything" />
      <Modal />
    </Provider>
  );
};

export default App;
