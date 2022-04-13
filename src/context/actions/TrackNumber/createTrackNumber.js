import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    CREATE_TRACK_NUMBER_FAIL,
    CREATE_TRACK_NUMBER_LOADING,
    CREATE_TRACK_NUMBER_SUCCESS 
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({trackNumber}, {data}) => (dispatch) => {
  dispatch({
    type: CREATE_TRACK_NUMBER_LOADING,
  });
  axiosInstance
    .post('https://ejov.site/api/track_number/create', {
      userId: data.id,
      trackNumber,
    })
    .then((res) => {
      if(res.data.status){
        dispatch({
          type: CREATE_TRACK_NUMBER_SUCCESS,
          payload: res.data,
        });
      }else{
        dispatch({
          type: CREATE_TRACK_NUMBER_FAIL,
          payload: res.data.message ? {error: res.data.message} : {error: 'Something went wrong, try agin'},
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: CREATE_TRACK_NUMBER_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
