import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, Text,View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/thems/colors';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';
import { REGISTER } from '../../constants/RouteNmes';
import Message from '../common/Message copy';
import styles from './styles';

const LoginComponent = ({
    error,
    form,
    justSignedUp,
    onChange,
    loading,
    onSubmit,
}) => {
    const {navigate} = useNavigation();
    return(
        <Container style={{width: '100%', height: '100%', backgroundColor: colors.white, paddingBottom: 100}}>
            <Image  width={70} height={70} source={require('../../assets/images/LoginTopImg.png')} />

            <View style={{marginTop: 120}}>
                <Text style={styles.title}>Sing Up</Text>

                <View style={styles.form}>
                    {justSignedUp && (
                        <Message
                        onDismiss={() => {}}
                        success
                        message="Account created successfully"
                        />
                    )}
                    {error && !error.error && (
                        <Message
                        onDismiss={() => {}}
                        danger
                        message="invalid credentials"
                        />
                    )}

                    {error?.error && <Message danger onDismiss message={error?.error} />}
                </View>
            
                <Input
                    label = "userName"
                    icon = {<Image source={require('../../assets/images/latter.png')} style={{margin: 5}} />}
                    iconPosition = "left"
                    placeholder = "userName"
                    value={form.userName || null}
                    onChangeText={(value) => {
                        onChange({name: 'userName', value});
                    }}
                    // error = "This fiels is required!"
                />

                <Input
                    label = "Password"
                    icon = {<Image source={require('../../assets/images/gate.png')} style={{margin: 5}} />}
                    iconPosition = "left"
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(value) => {
                        onChange({name: 'password', value});
                    }}
                />

                <CustomButton
                    primary
                    title="Next"
                    disabled={loading}
                    onPress={onSubmit}
                    loading={loading}
                />
                <View style={styles.createSection}>
                    <Text>Need a  new account? </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(REGISTER)
                            }}
                        >
                            <Text style={{fontWeight: '700'}}> Sing In</Text>
                        </TouchableOpacity>
                </View>
                
            </View>

        </Container>
    );
}

export default LoginComponent;