import axios from "axios"

const api = axios.create({
    baseURL: "https://api.hgbrasil.com/geoip",
    params: {
        api_key: "95faddc776e440e02b3289b3942aaea4"
    }
})

export default api