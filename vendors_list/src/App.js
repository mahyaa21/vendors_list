import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import Vendors from './components/vendors/vendors';
const App = (props: Props) => {
  return (<Provider store={store}>
            <Vendors/>
          </Provider>);
}

export default App;