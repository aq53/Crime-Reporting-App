import React, { Component } from 'react';
import './App.css';
import * as actions from './app/actions.jsx';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import firebase from './app/firebase.js';
import router from './app/router.jsx';

var store = require('./app/configStore.jsx').configure();
store.dispatch(actions.startAddReports());
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(actions.login(user.uid));
store.dispatch(actions.getUserInfo());
    
  }else {
        store.dispatch(actions.logout());
        browserHistory.push('/');

    }
});

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            {router}
        </Provider>
      </div>
    );
  }
}
export default App;