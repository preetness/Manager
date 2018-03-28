import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
