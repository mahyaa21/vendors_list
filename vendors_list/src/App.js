import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import VendorsList from './components/vendorsList/vendorsList';
const App = (props: Props) => {
  return (<Provider store={store}>
            <VendorsList/>
          </Provider>);
}

export default App;