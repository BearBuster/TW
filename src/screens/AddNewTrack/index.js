import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import AddNewTrackComponent from '../../components/AddTrack';
import { TRACKING_LIST } from '../../constants/RouteNmes';
import createTrackNumber from '../../context/actions/TrackNumber/createTrackNumber';
import { GlobalContext } from '../../context/Provide';

const AddNewTrack = () => {

    const {navigate} = useNavigation()
    const [form, setForm] = useState({});
    const {
        authDispatch,
        authState: {error, loading, user_data, data},
    } = useContext(GlobalContext);

    const onSubmit = () => {
        if (form.trackNumber) {
          createTrackNumber(form, user_data)(authDispatch)
          navigate(TRACKING_LIST)
        }
      };

    
      const onChange = ({name, value}) => {
        setForm({...form, [name]: value});
      };

    return(
        <AddNewTrackComponent
          onChange={onChange}
          onSubmit={onSubmit}
          loading={loading}
        />
    );
}

export default AddNewTrack;