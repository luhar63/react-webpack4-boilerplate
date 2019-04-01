/* eslint-disable import/no-named-as-default */
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Login from 'Containers/Login/Loadable';
import Register from 'Containers/Register/Loadable';

import './style.scss';
import './normalize.scss';

// import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class Root extends Component {
    state = {};

    render() {
        return (
            <div>
                <ToastContainer
                    hideProgressBar
                    autoClose={5000}
                    className="toast-container"
                    toastClassName="toast"
                    bodyClassName="toast-body"
                    closeButton={<i className="zmdi zmdi-close" />}
                />
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route
                        exact
                        path="/login"
                        render={props => <Login {...props} />}
                    />
                    <Route
                        exact
                        path="/register"
                        render={props => <Register {...props} />}
                    />
                </Switch>
            </div>
        );
    }
}

Root.propTypes = {
    // children: PropTypes.element
};

function mapStateToProps() {
    return {
        // user: state.userReducer.user
    };
}
function mapDispatchToProps() {
    return {
        // getUser: getUser()
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
