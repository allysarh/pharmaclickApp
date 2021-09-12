import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, Icon, Input, ThemeProvider, Image, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import logo from '../assets/images/logo.png'
import drug from '../assets/illustration/drugs.svg'
import HTTP from '../HTTP';
import { connect, useDispatch } from 'react-redux';
import { authLogin } from '../action'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

const LoginPage = (props) => {
    const [email, setEmail] = useState('')
    const [passShow, setPassShow] = useState(true)
    const [password, setPassword] = useState('')
    const [loginForm, setLoginForm] = useState(false)
    const dispatch = useDispatch()

    useEffect(async () => {
        try {
            let token = await AsyncStorage.getItem('token')
            // if (token) {
            //     props.navigation.dispatch(StackActions.replace("TabNav"))
            // }
        } catch (error) {
            console.log("error get token", error)
        }

    })

    // FUNCTIONS
    const onBtnLogin = async () => {
        try {
            if(!email || !password){
                return alert("Fill all the form!")
            }
            dispatch(authLogin(email, password))
            let token = await AsyncStorage.getItem('token')
            if (token) {
                props.navigation.dispatch(StackActions.replace("TabNav"))
            } else {
                alert("Login Failed: account not found!")
            }
        } catch (error) {
            console.log("error login", error)
        }
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: wp(60), height: hp(5), margin: '5%' }}>
                    <Image style={{ height: '100%' }} source={logo} />
                </View>
                <Text h4>Login to continue.</Text>
                <Text>Don't have any account? <Text style={{ color: '#12a37c' }}>Sign up!</Text></Text>
                <View style={{ width: wp(75), alignItems: 'center', margin: hp(5) }}>
                    <Input placeholder='Email'
                        leftIcon={
                            <Icon name="mail" type="feather" size={22} color="#12a37c" />
                        }
                        onChangeText={e => setEmail(e)}
                        placeholderTextColor="#12a37c"
                        errorMessage={email ? null : "This field is required"}
                    />
                    
                    <Input placeholder='Password' secureTextEntry={passShow}
                        leftIcon={
                            <Icon name="lock" type="feather" size={22} color="#12a37c" />
                        }
                        rightIcon={
                            <Icon name={passShow ? "eye-off" : "eye"} type="feather" size={22} color="white" onPress={() => setPassShow(!passShow)} />
                        }
                        onChangeText={e => setPassword(e)}
                        placeholderTextColor="#12a37c"
                    />
                    <Button title="Login"
                        containerStyle={{ width: wp(50) }}
                        titleStyle={{ color: 'white', fontWeight: 'bold' }}
                        buttonStyle={{ backgroundColor: 'black' }}
                        onPress={onBtnLogin} />
                </View>
            </View>
        </View>
    )
}

export default LoginPage