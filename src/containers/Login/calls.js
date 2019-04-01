import axios from 'axios';
import { login } from 'Constants/api';
import {
    loginFetchAction,
    loginFetchingAction,
    loginFetchedAction,
    loginErrorFetchAction
} from './actions';

export default function loginFetch() {
    return dispatch => {
        dispatch(loginFetchAction());

        dispatch(loginFetchingAction());
        axios
            .post(login, {
                email: 'peter@klaven',
                password: 'cityslicka'
            })
            .then(response => {
                dispatch(loginFetchedAction(response));
                // console.log(response);
            })
            .catch(error => {
                dispatch(loginErrorFetchAction(error));
                // console.log(error);
            });
    };
}
