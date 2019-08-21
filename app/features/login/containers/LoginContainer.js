import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from '../actions';
import { getLoginState } from '../selectors';

class LoginContainer extends Component {
    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        status: getLoginState(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (email, password) => dispatch(loginActions.requestLogin(email, password)),
        onForgottenPassword: (email) => dispatch(loginActions.requestForgottenPassword(email))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
