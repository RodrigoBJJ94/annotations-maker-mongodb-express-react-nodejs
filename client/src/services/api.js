import axios from 'axios';

const api = axios.create({
    baseURL: 'https://annotations-maker.herokuapp.com/'
});

export default api;
