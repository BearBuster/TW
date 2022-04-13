import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useContext, useReducer, useEffect } from 'react';
import TrackingListComponent from '../../components/TrackingList';
import getTrackNumber from '../../context/actions/TrackNumber/getTrackNumber';
import authInitialStates from '../../context/initialsStates/authInitialStates';
import { GlobalContext } from '../../context/Provide';
import auth from '../../context/reducers/auth';

const TrackingList = () => {

    const {
        authDispatch,
        authState: {error, user_data},
    } = useContext(GlobalContext);

    const {
        trackNumbersDispatch,
        trackNumbersState: {
            getTrackNumber : {data,loading}
        }
    } = useContext(GlobalContext);

    useFocusEffect(
        React.useCallback(() => {
            getTrackNumber(user_data.data.id)(trackNumbersDispatch)
            return () => {};
        }, []),
    );
    
    const someFun = () => {
        getTrackNumber(user_data.data.id)(trackNumbersDispatch)
        return () => {};
    }

    return(
        <TrackingListComponent
            data={data.data}
            loading={loading}
            someFun={someFun}
        />
    );
}

export default TrackingList;