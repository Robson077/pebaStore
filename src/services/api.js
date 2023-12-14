import axios from "axios"

const api = axios.create({
    baseURL: "https://backend-pebastore.vercel.app/"
})

export default api