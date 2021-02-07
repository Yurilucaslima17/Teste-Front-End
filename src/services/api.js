import axios from 'axios';

const api = axios.create({
    baseURL: 'https://corebiz-test.herokuapp.com',
    headers: {'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'}
});

export default api;