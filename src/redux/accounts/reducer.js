import * as actionTypes from './actionTypes';


const initialState = {
    accounts: [],
    loading: false,
    error: null,
    successMessage: null,
    user: null,
    accessToken: null,
    isAuthenticated: false,
    signupSuccess: false,
}

const accountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                successMessage: null,
                signupSuccess: false,
            }
        case actionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                successMessage: null,
                signupSuccess: false,

            }
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                // accounts: [...state.accounts, action.payload],
                successMessage: action.payload.message,
                signupSuccess: true,
            }
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                successMessage: null,
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                successMessage: null,
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: {
                    id: action.payload.user_id,
                    username: action.payload.username,
                    email: action.payload.email,
                },
                successMessage: 'Login Successful',
                isAuthenticated: true,
                accessToken: action.payload.access_token,
            }

        default:
            return state;
    }
}

export default accountsReducer;