const SIGNUP = 'user/SIGNUP';
const LOGIN_REQUEST = 'user/LOGIN_REQUEST';
const LOGOUT_REQUEST = 'user/LOGOUT_REQUEST';

export const signUp = (id, password) => ({
    type: SIGNUP,
    id,
    password
})

const logInSuccess = () => ({
    type: LOGIN_REQUEST
})

const logOutComplete = () => ({
    type: LOGOUT_REQUEST
})

export const logInLoading = (id, password) => (dispatch, getState)=> {
    const user = getState().user.user;
    if(user.id === id && user.password === password) {
        return setTimeout(() => dispatch(logInSuccess()), 1000)}
    else alert('등록되지 않은 회원입니다.');
}

export const logOutLoading = () => dispatch => {
    setTimeout(() => {
        dispatch(logOutComplete())
    }, 1000)
};

const initialState = {
    user: {
        id: '',
        password: ''
    },
    isLoggedIn: false
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP:
            return {
                ...state,
                user: {
                    id: action.id,
                    password: action.password
                }
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggedIn: true
            };
        case LOGOUT_REQUEST: 
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
}

export default user;