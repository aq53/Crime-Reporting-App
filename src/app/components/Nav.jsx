import React from 'react';
import AppBar from 'material-ui/AppBar';
import { IconButton } from 'material-ui'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import menu from '.././images/menu.png';
import Divider from 'material-ui/Divider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import firebase from '.././firebase.js';
import { hashHistory } from 'react-router';
import * as actions from '.././actions.jsx';
import { connect } from 'react-redux';
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    renderSignIn() {
        hashHistory.push("/login");
    }

    renderSignUp() {
        hashHistory.push("/signup");
    }
    renderMain() {
        hashHistory.push('/');
    }
    handleToggle = () => {
        this.setState({ open: !this.state.open });
    }
    render() {
        var { dispatch, userInfo } = this.props;
        var userName = () => {
            var message = "Welcome ";
            var name = userInfo.name;
            // console.log(name);
            // console.log(userInfo.email);
            return (
                <div className="iconElement">
                    {message}
                    <b>{name}</b>
                </div>);
        };
        return (
            <div>
                <AppBar
                    title={<span className='AppBar-title'>Crime Reporting App</span>
                    }
                    iconElementLeft={
                        <IconButton onClick={this.handleToggle}>
                            <img src={menu} alt="Menu" className='App-logo' />
                        </IconButton>
                    }
                    iconElementRight={firebase.auth().currentUser ? userName() :
                        <div className='iconElement'>
                            Created by <a href="https://github.com/aq53" target="_blank"
                            rel="noopener noreferrer" 
                            >Abdul Qadir</a>
                        </div>
                    }
                    showMenuIconButton={true}
                />
                <Drawer width={250}
                    disableSwipeToOpen={false}
                    onRequestChange={(open) => this.setState({ open })}
                    docked={false} open={this.state.open} >
                    <AppBar
                        iconElementRight={<IconButton onClick={() => { this.setState({ open: false }); }}><NavigationClose /></IconButton>}
                        showMenuIconButton={false}
                    />
                    {
                        !firebase.auth().currentUser ?
                            <div>
                                <MenuItem style={{ color: '#333333' }} onClick={this.renderMain}>Dashboard</MenuItem>
                                <Divider />
                                <MenuItem style={{ color: '#333333' }} onClick={this.renderSignIn}>Sign In</MenuItem>
                                <Divider />
                                <MenuItem style={{ color: '#333333' }} onClick={this.renderSignUp}>Sign Up</MenuItem>
                                <Divider /></div> :
                            <div>
                                <MenuItem style={{ color: '#333333' }} onClick={this.renderMain}>Dashboard</MenuItem>
                                <Divider />
                                <MenuItem style={{ color: '#333333' }} onClick={() => { hashHistory.push('/FileReport') }}>File a Report</MenuItem>
                                <Divider />
                                <MenuItem style={{ color: '#333333' }} onClick={() => {
                                    dispatch(actions.startLogout());
                                    hashHistory.push('/');
                                    this.setState({ open: false })
                                }} >Sign Out</MenuItem>
                                <Divider />
                            </div>}

                </Drawer>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            userInfo: state.userInfo
        };
    }
)(Nav);