import * as redux from 'redux';
import thunk from 'redux-thunk';
import {selAreaReducer,addRepReducer,authReducer,userInfoReducer} from './reducers.jsx';

export var configure = () => {
    var reducer = redux.combineReducers({
        reports:addRepReducer,
        auth:authReducer,
        userInfo:userInfoReducer,
        selectedArea:selAreaReducer
    });

    var store = redux.createStore(reducer,redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};

