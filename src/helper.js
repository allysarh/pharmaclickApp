import AsyncStorage from "@react-native-async-storage/async-storage"

export const URL_API = 'http://pharma_api.purwadhikafs3.com'
export const headers = {
    // local storage get item
    headers: {
        Authorzation: `Bearer: ${AsyncStorage.getItem("tkn_id")}`
    }
}
export const LOGIN_SUCCES = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'