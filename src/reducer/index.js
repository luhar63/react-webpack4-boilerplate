import { combineReducers } from 'redux';
import loginReducer from 'Containers/Login/reducer';
// import { connectRouter } from 'connected-react-router';
// import { history } from '../store/configureStore';

const rootReducer = combineReducers({
    loginReducer
    // router: connectRouter(history)
});

export default rootReducer;
