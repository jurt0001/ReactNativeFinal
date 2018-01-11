import React from 'react';
import Main from "./components/Main";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import {PAGE_LIST} from './Pages'


let initialState = {
    data: [],
    selectedItem: null,
    page: PAGE_LIST
};

let store = createStore(reducers, initialState, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
     <Main />
      </Provider>  
    );
  }
}
