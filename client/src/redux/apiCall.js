import { loginFailure, loginStart, loginSuccess } from './userRedux';
import axios from 'axios';

export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post('http://localhost:8080/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (e) {
    dispatch(loginFailure());
  }
};
