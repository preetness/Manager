import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyD5q5mybjroCYshfLceun9DICE9Po01DWQ',
      authDomain: 'employee-management-c67f9.firebaseapp.com',
      databaseURL: 'https://employee-management-c67f9.firebaseio.com',
      projectId: 'employee-management-c67f9',
      storageBucket: 'employee-management-c67f9.appspot.com',
      messagingSenderId: '702308436720'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
