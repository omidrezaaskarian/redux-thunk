import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import { Provider } from 'react-redux';
import {store, persistor} from './state-management-thunk/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ProductList } from './views/product/ProductList';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        {/* <App /> */}
        <ProductList />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

