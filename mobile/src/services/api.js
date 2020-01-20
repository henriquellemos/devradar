import axios from 'axios';

const api = axios.create({
    // Verity
    //baseURL: 'http://192.168.15.39:3333',

    // Araguari
    baseURL: 'http://192.168.1.80:3333',
})

export default api;