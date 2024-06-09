import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // 명명된 내보내기로 가져옴
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
