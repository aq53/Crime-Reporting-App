import React from 'react';
import * as actions from '../actions.jsx';
import { connect } from 'react-redux';
import Nav from './Nav.jsx';
import FlatButton from 'material-ui/FlatButton';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var { dispatch } = this.props;
        var name = this.refs.name.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var rePassword = this.refs.rePassword.value;

        if (password !== rePassword) {
            console.log('Password mismatch');
        }
        else {
            dispatch(actions.startCreateUser(name, email, password));
            this.refs.name.value = '';
            this.refs.email.value = '';
            this.refs.password.value = '';
            this.refs.rePassword.value = '';
        }
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-offset-2">
                            <div className="callout-auth">
                                <h3>Sign Up</h3>
                                <div className="form">
                                    <form onSubmit={this.handleSubmit}>
                                        <input type="text" ref="name" placeholder="Name" required /><br />
                                        <input type="email" ref="email" placeholder="Email" required /><br />
                                        <input type="password" ref="password" placeholder="Password" required /><br />
                                        <input type="password" ref="rePassword" placeholder="Confirm Password" required /><br />
                                        <br />
                                        <br />
                                        <input type="Submit" className="btn btn-info" value="Submit" />
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

export default connect()(SignUp);