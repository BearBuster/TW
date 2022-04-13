import { useContext } from "react";
import { GET_TRACK_NUMBERS_FAIL, GET_TRACK_NUMBERS_LOADING, GET_TRACK_NUMBERS_SUCCESS } from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";
import axios from "../../../helpers/axiosInstance"
import { GlobalContext } from "../../Provide";



export default (userId) => (dispatch) => {


    dispatch({
        type: GET_TRACK_NUMBERS_LOADING
    });

    axiosInstance.post('https://ejov.site/api/track_number/get', { userId }).then((res) => {
        dispatch({
            type: GET_TRACK_NUMBERS_SUCCESS,
            payload: res.data
        })
    }).catch((err) => {
        dispatch({
            type: GET_TRACK_NUMBERS_FAIL,
            payload: err.response ? err.response.data : {message: "Something Wrong! Try again"}
        })
    })

}