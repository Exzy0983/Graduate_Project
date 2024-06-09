import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, LOGOUT } from './types';

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: REGISTER_FAIL, payload: err.response.data });
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response.data });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};
