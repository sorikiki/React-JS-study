const SIGNUP = 'user/SIGNUP';
const LOGIN_REQUEST = 'user/LOGIN_REQUEST';
const LOGOUT_REQUEST = 'user/LOGOUT_REQUEST';

export const signUp = (id, password) => ({
    type: SIGNUP,
    id,
    password
})

export const logInLoading = (id, password) => ({
    type: LOGIN_REQUEST,
    id,
    password
})

export const logOutLoading = () => ({
    type: LOGOUT_REQUEST
})

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
        case LOGIN_REQUEST: {
            if (state.user.id === action.id && state.user.password === action.password) {
                return {
                    ...state,
                    isLoggedIn: true
                }
            } else return state;
        };
        case LOGOUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false
            }
        }
        default:
            return state;
    }
}

export default user;