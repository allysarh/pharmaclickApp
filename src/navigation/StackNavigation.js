import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import TabNavigation from './TabNavigation'
import { useDispatch } from 'react-redux'
import { keepLogin } from '../action/authAction'
const Stack = createNativeStackNavigator()

const StackNavigation = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(keepLogin())
    }, [])
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="TabNav" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
    )
}

export default StackNavigation