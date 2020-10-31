import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-de9be.firebaseio.com/"
});

export default instance;