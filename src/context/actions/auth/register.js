import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    REGISTER_LOADING,
    CLEAR_AUTH_STATE
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
  
export const clearAuthState = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_STATE,
    });
};
  
export default ({
    email,
    password,
    userName,
    firstName,
    lastName,
}) => (dispatch) => (onSuccess) => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('https://ejov.site/api/user/register', {
        email,
        password,
        userName,
        firstName,
        lastName,
      })
      .then((res) => {
        if(res.data.status){
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
          });
    
          onSuccess(res.data);
        }else{
          dispatch({
            type: REGISTER_FAIL,
            payload: {error: 'Incorrect Credentials'},
          });  
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
    });
};
  