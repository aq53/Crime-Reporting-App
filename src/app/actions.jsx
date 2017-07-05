import firebase, { firebaseRef } from './firebase.js';
import { hashHistory } from 'react-router';

export var getSelArea = (area) => {
    return {
        type: 'GET_SELECTED_AREA',
        area
    };
};
export var addReports = (reports) => {
    return {
        type: 'ADD_REPORTS',
        reports
    };
};

export var startAddReports = () => {
    return (dispatch, getState) => {
        var reportRef = firebaseRef.child('reports');
        return reportRef.once('value').then((snapshot) => {
            var reports = snapshot.val() || {};
            var parsedReports = [];
            Object.keys(reports).forEach((reportId) => {
                parsedReports.push({
                    id: reportId,
                    ...reports[reportId]
                });
            });
            dispatch(addReports(parsedReports));
        });
    };
};
export var startFileReport = (repType, area, title, desc, reportedBy) => {
    return (dispatch, getState) => {
        var report = {
            repType,
            area,
            title,
            desc,
            reportedBy
        };
        return firebaseRef.child(`reports`).push(report).then((result) => {
            dispatch(startAddReports());
            console.log('Report filed successfully!')
        }, (error) => {
            alert('Unable to file report');
        });
    };
};
export var userInfo = (user) => {
    return {
        type: 'GET_USER_INFO',
        user
    }
};
export var getUserInfo = (uid) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var userInfoRef = firebaseRef.child(`users/${uid}`);

        return userInfoRef.once('value').then((snapshot) => {
            var user = snapshot.val() || {};
            dispatch(userInfo(user));
        });
    };
};
export var startLogout = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            console.log('Logged out!');
        });
    };
};
export var startLogin = (email, password) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
            console.log('logged in');
            hashHistory.push('/')
        }, (error) => {
            console.log('unable to login');
        });
    };
};
export var startCreateUser = (name, email, password) => {
    return (dispatch, getState) => {
        var user = {
            name,
            email,
            password
        };
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((result) => {
            var uid = result.uid;
            var userRef = firebaseRef.child(`users/${uid}`).set(user);
            return userRef.then(() => {
                // dispatch(createUser({
                //     ...user,
                //     id:uid
                // }));
                hashHistory.push('/login');
            });
        }, (error) => {
            alert('Unable to create user')
        });
    };
};

export var login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};
export var logout = () => {
    return {
        type: 'LOGOUT',
    };
};