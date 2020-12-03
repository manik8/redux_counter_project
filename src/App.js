import React from "react";
import Counter from "./Counter";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import countReducer from './countReducer';
import productReducer from './productReducer';
import Modal from './Modal';
import Products from './Products';
import modalReducer from './modalReducer';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = [thunk];
const store = createStore(combineReducers({
  countState: countReducer,
  modalState: modalReducer,
  productState: productReducer
}), composeWithDevTools(applyMiddleware(...middleware)));

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="anything" />
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
