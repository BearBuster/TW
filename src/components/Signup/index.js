import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Image, Text,View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/thems/colors';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import { LOGIN, Register } from '../../constants/RouteNmes';
import styles from './styles';
import Message from '../common/Message copy';
import Icon from '../common/Icon';

const RegisterComponent = ({
        onSubmit,
        onChange,
        form,
        errors={errors},
        error,
        loading
    }) => {
    const {navigate} = useNavigation();
    return(
        <Container style={{width: '100%', height: '100%', backgroundColor: colors.white}}>
            <View >
                <Text style={styles.title}>Register</Text>
                {error?.error && (
                    <Message retry danger retryFn={onSubmit} message={error?.error} />
                )}

                <Input
                    label = "User Name"
                    icon = {<Text></Text>}
                    iconPosition = "left"
                    placeholder = "User Name"
                    onChangeText={(value) => {
                        onChange({name: "userName", value: value});
                    }}
                    error={errors.userName}
                />
                
                <Input
                    label = "First Name"
                    iconPosition = "left"
                    placeholder = "First Name"
                    onChangeText={(value) => {
                        onChange({name: "firstName", value });
                    }}
                    error={errors.firstName}
                />

                <Input
                    label = "Last Name"
                    icon = {<Text></Text>}
                    iconPosition = "left"
                    placeholder = "Last Name"
                    onChangeText={(value) => {
                        onChange({name: "lastName", value });
                    }}
                    error={errors.lastName}
                />

                <Input
                    label = "Email"
                    icon = {<Text></Text>}
                    iconPosition = "left"
                    placeholder = "Email"
                    onChangeText={(value) => {
                        onChange({name: "email", value });
                    }}
                    error={errors.email}
                />

                <Input
                    label = "Password"
                    icon = {<Icon style={{padding:5}} type='ant' size={17} name="lock" />}
                    iconPosition = "left"
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(value) => {
                        onChange({name: "password", value: value });
                    }}
                    error={errors.password}
                />

                <CustomButton
                    primary
                    onPress={onSubmit}
                    title="Register"
                    loading={loading}
                    disabled={loading}
                />
                <View style={styles.createSection}>
                    <Text>Already have an account? </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(LOGIN)
                            }}
                        >
                            <Text style={{fontWeight: '700'}}> Log In</Text>
                        </TouchableOpacity>
                </View>
                
            </View>

        </Container>
    );
}

export default RegisterComponent;