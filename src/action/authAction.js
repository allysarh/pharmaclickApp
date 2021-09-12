import AsyncStorage from "@react-native-async-storage/async-storage"
import { headers, LOGIN_SUCCES, LOGOUT } from "../helper"
import HTTP from "../HTTP"

export const authLogin = (email, password) => {
    return async (dispatch) => {
        try {
            let login = await HTTP.post('/user/login', { email, password })
            console.log("login succes", login.data)
            await dispatch({
                type: LOGIN_SUCCES,
                payload: login.data
            })
            await AsyncStorage.setItem('token', `${login.data.token}`)
        } catch (error) {
            console.log("error login", error)
        }
    }

}

export const keepLogin = () => {
    return async (dispatch) => {
        try {
            let res = await HTTP.get('/user/keep')
            console.log("data keep login", res.data)
            if (res.data.length > 0) {
                dispatch({
                    type: LOGIN_SUCCES,
                    payload: res.data
                })
            }
        } catch (error) {

        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            let cekLogout = await AsyncStorage.getItem('token')
            console.log('cek logout1', cekLogout)

            await AsyncStorage.removeItem('token', async (err) => {

                if (err) {
                    console.log("error remove item")
                }
    
                let cekLogout = await AsyncStorage.getItem('token')
                console.log('cek logout', cekLogout)
            })
        } catch (error) {
            console.log("error logout", err)
        }

        dispatch({
            type: LOGOUT
        })
    }

}