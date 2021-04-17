import ConfigBase from '../config/global'
import axios from "axios";


const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

class AxiosHelper {
   
    constructor() {
        this.instance = axios.create({
                baseURL: ConfigBase.BASE_URL
        })
    }

    get = (query) => {
        return this.instance({
            method: METHOD.GET,
            url: `/${query}`
        })
    }

    put = (body, query) => {
        return this.instance({
            method: METHOD.PUT,
            url: `/${query}`,
            data: body
        })
    }

    delete = (body, query) => {
        return this.instance({
            method: METHOD.DELETE,
            url: `/${query}`,
            data: body
        })
    }

    post = (body, query) => {
        return this.instance({
            method: METHOD.POST,
            url: `/${query}`,
            data: body
        })
    };
}



const axiosHelper = new AxiosHelper();
export default axiosHelper;