import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, LOGOUT } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  error: null,
  tutorials: [
    { id: 1, title: '자바스크립트 기초', completed: false },
    { id: 2, title: 'HTML과 CSS', completed: true },
    { id: 3, title: 'React 기본', completed: false },
    { id: 4, title: 'Node.js와 Express', completed: false },
    { id: 5, title: 'MongoDB 기초', completed: false },
    { id: 6, title: 'Python 기초', completed: false },
    { id: 7, title: 'Java 기초', completed: false },
    { id: 8, title: 'C++ 기초', completed: false },
    { id: 9, title: 'SQL 기초', completed: false },
    { id: 10, title: 'Django 기본', completed: false },
    { id: 11, title: 'Flask 기본', completed: false },
    { id: 12, title: 'Ruby on Rails', completed: false },
    { id: 13, title: 'Swift 기초', completed: false },
    { id: 14, title: 'Kotlin 기초', completed: false },
    { id: 15, title: 'Android 개발', completed: false },
    { id: 16, title: 'iOS 개발', completed: false },
    { id: 17, title: 'TensorFlow 기초', completed: false },
    { id: 18, title: '머신 러닝 기초', completed: false },
    { id: 19, title: '데이터 분석', completed: false },
    { id: 20, title: '알고리즘 기초', completed: false },
  ],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
