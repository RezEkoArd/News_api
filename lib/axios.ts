import axios from "axios"
import { config } from "process"

const baseUrl = process.env.NEXt_PUBLIC_API_URL


const axiosInstance = axios.create({
    baseURL : baseUrl,
    headers : {
        'Content-Type' : "application/json"
    }
})