import axios from 'axios'

const client = axios.create({
    baseURL: 'https://5c9d36363be4e30014a7d368.mockapi.io/testeage/v1/',
    timeout: 1000,
    withCredentials: false
})

export default client
