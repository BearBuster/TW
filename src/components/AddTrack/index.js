import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../assets/thems/colors';
import Container from '../../components/common/container';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import Input from '../common/input';


const AddNewTrackComponent = ({
    loading,
    onSubmit,
    onChange
}) => {  
    return(
        <Container>
            <View style={{width: '100%', height: '100%', backgroundColor: colors.white, padding: 20}}>
                <Input
                    label = "Track Number "
                    icon = {<Icon style={{margin: 5}} type="fontisto" size={17} name="qrcode" />}
                    iconPosition = "left"
                    placeholder="Enter Track Number"
                    onChangeText={(value) => {
                        onChange({name: 'trackNumber', value});
                    }}
                />
                <CustomButton
                    primary
                    title="Add"
                    disabled={loading}
                    onPress={onSubmit}
                    loading={loading}
                />
            </View>
        </Container>
    );
}

export default AddNewTrackComponent;