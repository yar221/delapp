import axios from 'axios'

export const API_URL = 'https://server-delta-three.vercel.app/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default $api
