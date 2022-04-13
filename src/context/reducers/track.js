import {
  CREATE_TRACK_NUMBER_FAIL,
  CREATE_TRACK_NUMBER_LOADING,
  CREATE_TRACK_NUMBER_SUCCESS,
  DELETE_TRACK_NUMBER_LOADING,
  DELETE_TRACK_NUMBER_SUCCESS,
  GET_TRACK_NUMBERS_FAIL,
  GET_TRACK_NUMBERS_LOADING,
  GET_TRACK_NUMBERS_SUCCESS,
  EDIT_TRACK_NUMBER_LOADING,
  EDIT_TRACK_NUMBER_SUCCESS,
  EDIT_TRACK_NUMBER_FAIL,
} from '../../constants/actionTypes';

const trackNumber = (state, {type, payload}) => {
  switch (type) {
    case EDIT_TRACK_NUMBER_LOADING: {
      return {
        ...state,
        createTrackNumber: {
          ...state.createTrackNumber,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_TRACK_NUMBER_SUCCESS: {
      return {
        ...state,
        createTrackNumber: {
          ...state.createTrackNumber,
          loading: false,
          error: null,
        },

        getTrackNumber: {
          ...state.getTrackNumber,
          loading: false,
          data: state.getTrackNumber.data.map((item) => {
            if (item.id === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_TRACK_NUMBER_FAIL: {
      return {
        ...state,
        createTrackNumber: {
          ...state.createTrackNumber,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_TRACK_NUMBER_LOADING: {
      return {
        ...state,
        deleteTrackNumber: {
          ...state.deleteTrackNumber,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_TRACK_NUMBER_SUCCESS: {
      return {
        ...state,
        deleteTrackNumber: {
          ...state.deleteTrackNumber,
          loading: false,
          error: null,
        },

        getTrackNumber: {
          ...state.getTrackNumber,
          loading: false,
          data: state.getTrackNumber.data.filter((item) => item.id !== payload),
          error: null,
        },
      };
    }

    case CREATE_TRACK_NUMBER_FAIL:
      return {
        ...state,
        createTrackNumber: {
          ...state.createTrackNumber,
          loading: false,
          error: null,
        },
      };
    case CREATE_TRACK_NUMBER_LOADING:
      return {
        ...state,
        createTrackNumber: {
          ...state.createTrackNumber,
          loading: true,
          error: null,
        },
      };
    case CREATE_TRACK_NUMBER_SUCCESS:
      return {
        ...state,
        createTrackNumber: {
          ...state.createTrackNumber,
          loading: false,
          error: null,
          data: payload,
        },

        getTrackNumber: {
          ...state.getTrackNumber,
          loading: false,
          data: [payload, ...state.getTrackNumber.data],
          error: null,
        },
      };

    case CREATE_TRACK_NUMBER_FAIL:
      return {
        ...state,
        createTrackNumber: {
          ...state.createTrackNumber,
          loading: false,
          error: payload,
        },
      };

    case GET_TRACK_NUMBERS_LOADING:
      return {
        ...state,
        getTrackNumber: {
          ...state.getTrackNumber,
          loading: true,
          error: null,
        },
      };

    case GET_TRACK_NUMBERS_SUCCESS:
      return {
        ...state,
        getTrackNumber: {
          ...state.getTrackNumber,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_TRACK_NUMBERS_FAIL:
      return {
        ...state,
        getTrackNumber: {
          ...state.getTrackNumber,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default trackNumber;
