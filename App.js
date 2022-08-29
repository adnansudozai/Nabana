import React from 'react';
import StackNav from './src/navigation/StackNav';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
    <StackNav/>
    </Provider>
  );
};

export default App;
