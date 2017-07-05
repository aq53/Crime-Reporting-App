import React from 'react';
// import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions.jsx';
// import { Link } from 'react-router';
import Nav from './Nav.jsx';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleLogin(e) {
        e.preventDefault();
        var { dispatch } = this.props;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        dispatch(actions.startLogin(email, password));
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-offset-2">
                            <div className="callout-auth">
                                <h3>Log In</h3>
                                <div className="form">
                                    <form onSubmit={this.handleLogin}>
                                        <input type="email" ref="email" placeholder="Enter Email" required /><br />
                                        <input type="password" ref="password" placeholder="Enter Password" required />
                                        <br /><br/>
                                        <input type="Submit" className="btn btn-info" value="Log In" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default connect()(Login);