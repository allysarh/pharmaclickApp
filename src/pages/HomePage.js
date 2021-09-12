import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { logout } from '../action'

const HomePage = (props) => {
    const dispatch = useDispatch()

    const onBtnLogout = () =>{
        dispatch(logout())
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }],
            })
        );
    }
    return (
        <View>
            <Text h1>This is homepage</Text>
            <Button title="Logout" onPress={onBtnLogout} />
        </View>
    )
}

export default HomePage