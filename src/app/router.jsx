import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import FileReport from './components/FileReport.jsx';
import firebase from './firebase.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500,red500,redA200,grey50} from 'material-ui/styles/colors';
import Colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey50,
    primary1Color:cyan500,
    alternateTextColor: grey50,
    inputStyle:grey50
  },
  appBar: {
    height: 70,
    color: '#333333'
  },
  style:{
      input:{
          color:'black'
      }
  }
});
var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};
var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

export default (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}/>
            <Route path="login" component={Login} onEnter={redirectIfLoggedIn}/>
            <Route path="signup" component={SignUp} onEnter={redirectIfLoggedIn}/>
            <Route path="FileReport" component={FileReport} onEnter={requireLogin} />
            {/*<Route path="signup" component={SignUp} onEnter={redirectIfLoggedIn} />
            <Route path="home" component={Main}>
                <Route path="profile" component={Profile} onEnter={requireLogin} />
                <Route path="donors" component={Donors} onEnter={requireLogin} />
                <IndexRoute component={Home} onEnter={requireLogin} />
            </Route>*/}
        </Router>
    </MuiThemeProvider>

);