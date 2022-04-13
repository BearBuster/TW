import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS 
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({password, userName}) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  axiosInstance
    .post('https://ejov.site/api/user/login', {
      password,
      userName,
    })
    .then((res) => {
      if(res.data.status){
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.userName));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      }else{
        dispatch({
          type: LOGIN_FAIL,
          payload: res.data.message ? {error: res.data.message} : {error: 'Something went wrong, try agin'},
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
