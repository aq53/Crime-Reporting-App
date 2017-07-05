import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import * as actions from './app/actions.jsx';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import firebase from './app/firebase.js';
import router from './app/router.jsx';

var store = require('./app/configStore.jsx').configure();
store.dispatch(actions.startAddReports());
// alert('hello');
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(actions.login(user.uid));
store.dispatch(actions.getUserInfo());
    
  }else {
        store.dispatch(actions.logout());
        hashHistory.push('/');

    }
});

class App extends Component {
  render() {
    return (
      <div>
        {/*<div className="App-header">
          <img src={menu} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <Provider store={store}>
            {router}
        </Provider>
      </div>
    );
  }
}
export default App;