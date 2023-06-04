import axios from 'axios'

export const API_URL = 'https://delivery-app-test.vercel.app/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default $api