import * as actionTypes from './actionTypes';
import axios from 'axios';

// Signup Actions

export const signupRequest = () => {
    return {
        type: actionTypes.SIGNUP_REQUEST,
    }
}

export const signupSuccess = (user) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        payload: user,
    }
}

export const signupFailure = (error) => {
    return {
        type: actionTypes.SIGNUP_FAILURE,
        payload: error,
    }
}
const SIGNUP_API_URL = 'http://127.0.0.1:8000/api/accounts/register/';

export const fetchSignupRequest = (userData) => async (dispatch) => {
    dispatch(signupRequest());
    // Add logic here to perform the actual signup request
    try {
        const response = await axios.post(SIGNUP_API_URL, userData);
        dispatch(signupSuccess(response.data));
    } catch (error) {
        console.log("Error during signup:", error.response.data)
        let message = '';
        let count = 1;
        const data = error.response?.data;
        if (data && typeof data === 'object') {
            Object.keys(data).forEach((key) => {
                data[key].forEach((msg) => {
                    message += `${count}: ${msg} \n`;
                    count++;
                });
            });
        } else {
            message = 'An unknown error occurred.';
        }
        dispatch(signupFailure(message))
    }


}

// Login Actions
export const loginRequest = () => {
    return {
        type: actionTypes.LOGIN_REQUEST,
    }
}

export const loginSuccess = (user) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: user,
    }
}

export const loginFailure = (error) => {
    return {
        type: actionTypes.LOGIN_FAILURE,
        payload: error,
    }
}

const LOGIN_API_URL = 'http://127.0.0.1:8000/api/accounts/login/';

export const fetchLoginRequest = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    // Add logic here to perform the actual login request

    try {
        const response = await axios.post(LOGIN_API_URL, userData);
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        dispatch(loginSuccess(response.data));
        console.log("Login successful:", response.data);

    } catch (error) {
        dispatch(loginFailure(
            error.response?.data || error.message

        ))
    }

}

const getProfileRequest = () => {
    return {
        type: actionTypes.GET_PROFILE_REQUEST,
    }
}

const getProfileRequestFailure = (error) => {
    return {
        type: actionTypes.GET_PROFILE_FAILED,
        payload: error,

    }
}

const getProfileRequestSuccess = (profile) => {
    return {
        type: actionTypes.GET_PROFILE_SUCCESS,
        payload: profile,
    }
}

const fetchProfileAPIURL = 'http://127.0.0.1:8000/api/accounts/profile/';

export const fetchProfileRequest = (token) => async (dispatch) => {
    dispatch(getProfileRequest());
    try {
        const response = await axios.get(fetchProfileAPIURL, {
            headers: {
                Authorization: `Bearer ${token}`
            },

        });
        dispatch(getProfileRequestSuccess(response.data));
    } catch (error) {
        dispatch(getProfileRequestFailure(error.response?.data || error.message));
    }
}