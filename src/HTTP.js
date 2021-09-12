import axios from "axios"
import { headers, URL_API } from "./helper"

class HTTP {
    get = (url, body) =>{
        return axios.get(URL_API + url, body, headers)
    }

    delete = (url) =>{
        return axios.delete(URL_API + url, headers)
    }

    post = (url, body) =>{
        return axios.post(URL_API + url, body, headers)
    }

    patch = (url, body) =>{
        return axios.patch(URL_API + url, body, headers)
    }
}

export default new HTTP