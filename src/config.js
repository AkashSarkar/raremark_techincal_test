import axios from 'axios';

const status = 'prod'
export const API_URL = 'https://5fe0b4ad04f0780017de93a2.mockapi.io/api/';
export const faker_url = ""
export const TOKEN = "AUTH_TOKEN"
const jwt = localStorage.getItem(TOKEN);

export const API = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`
    }
})
export const PUBLIC_API = axios.create({
    baseURL: API_URL,
    timeout: 10000
})

export const FAKER_API = axios.create({
    baseURL: faker_url,
    timeout: 10000
})
