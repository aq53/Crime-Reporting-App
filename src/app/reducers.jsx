// export var createUserReducer=(state={},action)=>{
//     switch(action.type){
//         case 'CREATE_USER':
//             return{
//                 ...action.user
//             };
//         case 'LOGOUT':
//             return {};
//         default:
//             return state;
//     }
// };

export var selAreaReducer = (state = '', action) => {
    switch (action.type) {
        case 'GET_SELECTED_AREA':
            return action.area;
        default :
            return state;
    }
};
export var addRepReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REPORTS':
            return [
                ...state,
                ...action.reports
            ];
        default:
            return state;
    }
};
export var authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };

        case 'LOGOUT':
            return {};
        default:
            return state;
    };
};

export var userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_INFO':
            return action.user;
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};