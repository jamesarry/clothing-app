import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import  store  from './redux/store';

//The Provider is a component that is the parent of everything inside our application. It allows us to get access to everything related to redux store
ReactDOM.render(
  <Provider store={store}> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

