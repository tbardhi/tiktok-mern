import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok-be-tao.herokuapp.com'
});

export default instance;